const fs = require("fs");
const path = require("path");

const root = path.join("wordpress-theme", "aiwa-international");
const pages = [
  ["index.html", "front-page.php", ""],
  ["global.html", "page-global.php", "Global Network"],
  ["green.html", "page-green.php", "Green AIWA"],
  ["history.html", "page-history.php", "Brand History"],
];

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function extract(html, tag) {
  const match = html.match(new RegExp(`<${tag}[^>]*>[\\s\\S]*?<\\/${tag}>`));
  return match ? match[0] : "";
}

function phpAsset(url) {
  return `<?php echo esc_url( aiwa_theme_asset( '${url}' ) ); ?>`;
}

function convert(html) {
  return html
    .replace(/(src|href)="assets\/([^"]+)"/g, (_, attr, asset) => `${attr}="${phpAsset(`assets/${asset}`)}"`)
    .replace(/href="index\.html#([^"]+)"/g, (_, hash) => `href="<?php echo esc_url( home_url( '/#${hash}' ) ); ?>"`)
    .replace(/href="index\.html"/g, `href="<?php echo esc_url( home_url( '/' ) ); ?>"`)
    .replace(/href="green\.html"/g, `href="<?php echo esc_url( home_url( '/green/' ) ); ?>"`)
    .replace(/href="global\.html"/g, `href="<?php echo esc_url( home_url( '/global/' ) ); ?>"`)
    .replace(/href="history\.html"/g, `href="<?php echo esc_url( home_url( '/history/' ) ); ?>"`)
    .replace(/href="#([^"]+)"/g, (_, hash) => `href="<?php echo esc_url( home_url( '/#${hash}' ) ); ?>"`);
}

fs.mkdirSync(root, { recursive: true });

const index = read("index.html");
fs.writeFileSync(path.join(root, "template-header-static.php"), convert(extract(index, "header")));
fs.writeFileSync(path.join(root, "template-footer-static.php"), convert(extract(index, "footer")));

for (const [source, target, templateName] of pages) {
  const html = read(source);
  const templateHeader = templateName ? `/*\nTemplate Name: ${templateName}\n*/\n` : "";
  let body = convert(extract(html, "main"));

  if (target === "front-page.php") {
    body = body
      .replace('<div class="news-carousel" aria-label="AIWA latest news carousel">', '<?php aiwa_render_news_carousel( function () { ?>\n      <div class="news-carousel" aria-label="AIWA latest news carousel">')
      .replace('      </div>\n    </section>\n\n    <section class="inquiry-section', '      </div>\n      <?php } ); ?>\n    </section>\n\n    <section class="inquiry-section');
  }

  if (target === "page-global.php") {
    body = body.replace('<div class="country-grid premium-country-grid" data-country-grid aria-label="AIWA country selector"></div>', '<?php aiwa_render_country_grid(); ?>');
  }

  if (target === "page-green.php") {
    body = body
      .replace(`href="<?php echo esc_url( home_url( '/#green-products' ) ); ?>"`, 'href="#green-products"')
      .replace(`href="<?php echo esc_url( home_url( '/#green-model' ) ); ?>"`, 'href="#green-model"');
  }

  const output = `<?php\n${templateHeader}get_header(); ?>\n${body}\n<?php get_footer(); ?>\n`;
  fs.writeFileSync(path.join(root, target), output);
}

console.log(`Generated WordPress templates in ${root}`);
