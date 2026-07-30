<?php
get_header(); ?>
<main id="top">
    <section class="hero">
      <div class="hero-media" data-hero-slider aria-hidden="true">
        <img class="hero-slide is-active" src="<?php echo esc_url( aiwa_theme_asset( 'assets/aiwa-bright-hero.png' ) ); ?>" alt="">
        <img class="hero-slide" src="<?php echo esc_url( aiwa_theme_asset( 'assets/aiwa-green-hero.png' ) ); ?>" alt="">
        <div class="hero-shade"></div>
      </div>
      <button class="hero-edge-control hero-edge-prev" type="button" data-hero-prev aria-label="Previous hero image"></button>
      <button class="hero-edge-control hero-edge-next" type="button" data-hero-next aria-label="Next hero image"></button>

      <div class="hero-content reveal-on-scroll">
        <p class="eyebrow">Global licensing and market operations headquarters</p>
        <h1>One brand standard. Multiple markets. Operated from Taiwan.</h1>
        <p class="hero-lead">
          AIWA Electronics International Co., Ltd. manages brand licensing, partner cooperation, OEM/ODM coordination, and product approval for AIWA markets outside Japan and Korea.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="<?php echo esc_url( home_url( '/#inquiry' ) ); ?>">Partner with AIWA</a>
          <a class="button secondary" href="<?php echo esc_url( home_url( '/#model' ) ); ?>">View cooperation model</a>
        </div>
        <div class="hero-slider-controls" aria-label="Hero image controls">
          <div class="hero-dots" data-hero-dots>
            <button class="is-active" type="button" aria-label="Show global licensing image"><span>Global HQ</span></button>
            <button type="button" aria-label="Show Green AIWA image"><span>Green AIWA</span></button>
          </div>
        </div>
      </div>

      <aside class="hero-status reveal-on-scroll" aria-label="Business scope">
        <div>
          <span>Scope</span>
          <strong>Outside Japan & Korea</strong>
        </div>
        <div>
          <span>Base</span>
          <strong>Taiwan Headquarters</strong>
        </div>
        <div>
          <span>Control Point</span>
          <strong>Approved to Ship</strong>
        </div>
      </aside>
    </section>

    <section class="intro-strip section-shell reveal-on-scroll" id="role">
      <div class="section-label">Our Role</div>
      <div class="intro-copy">
        <h2>Designed as a headquarters website, not a retail product catalog.</h2>
        <p>
          The site positions AIWA Electronics International Co., Ltd. as the authority that defines licensing scope, evaluates manufacturing routes, coordinates partner cooperation, and protects AIWA brand standards before products enter the market.
        </p>
      </div>
    </section>

    <section class="pillars reveal-on-scroll">
      <article>
        <img class="pillar-image" src="<?php echo esc_url( aiwa_theme_asset( 'assets/services/service-brand-licensing.png' ) ); ?>" alt="Brand licensing concept">
        <h3>Brand Licensing</h3>
        <p>Authorized use of the AIWA brand by territory, product category, and cooperation role.</p>
      </article>
      <article>
        <img class="pillar-image" src="<?php echo esc_url( aiwa_theme_asset( 'assets/services/service-market-operations.png' ) ); ?>" alt="Market operations concept">
        <h3>Market Operations</h3>
        <p>Taiwan HQ coordinates international partner onboarding, licensing direction, and category discussions.</p>
      </article>
      <article>
        <img class="pillar-image" src="<?php echo esc_url( aiwa_theme_asset( 'assets/services/service-oem-odm.png' ) ); ?>" alt="OEM and ODM coordination concept">
        <h3>OEM/ODM Coordination</h3>
        <p>Partners may propose factories or work with qualified manufacturing resources introduced through AIWA Electronics International Co., Ltd.</p>
      </article>
      <article>
        <img class="pillar-image" src="<?php echo esc_url( aiwa_theme_asset( 'assets/services/service-quality-governance.png' ) ); ?>" alt="Quality governance product approval concept">
        <h3>Quality Governance</h3>
        <p>Product specifications, packaging, brand identity, samples, and shipment approval remain centrally reviewed.</p>
      </article>
    </section>

    <section class="story-section section-shell reveal-on-scroll" id="story">
      <div class="story-copy">
        <p class="eyebrow">Brand Story</p>
        <h2>Developing consumer electronics since 1951 in Japan.</h2>
        <p>
          AIWA has been developing products to meet the growing demands from consumers since 1951 in Japan. The commitment to designing and manufacturing cost effective, high-quality consumer electronics accompanied with world class after-sales service connects the brand with dedicated consumers throughout the regions.
        </p>
        <a class="button primary" href="<?php echo esc_url( home_url( '/history/' ) ); ?>">View brand history</a>
      </div>
      <div class="story-card accent-card">
        <i class="icon-badge" data-icon="globe"></i>
        <strong>100+ countries worldwide</strong>
        <span>Business partnerships, distribution, marketing, and retail departments adapting to cultural and market differences.</span>
      </div>
    </section>

    <section class="split-section section-shell reveal-on-scroll" id="model">
      <div class="split-copy">
        <p class="eyebrow">Licensing Model</p>
        <h2>Partner-led markets, headquarters-led standards.</h2>
        <p>
          Local partners understand their sales channels and market needs. AIWA Electronics International Co., Ltd. provides the brand authorization framework, manufacturing coordination options, and final standard control.
        </p>
      </div>
      <div class="model-grid">
        <div class="model-card">
          <i class="icon-badge small" data-icon="map"></i>
          <strong>Territory</strong>
          <span>Regional rights are reviewed by target market and business capability.</span>
        </div>
        <div class="model-card">
          <i class="icon-badge small" data-icon="grid"></i>
          <strong>Category</strong>
          <span>Audio, display, home electronics, and market-specific proposals.</span>
        </div>
        <div class="model-card">
          <i class="icon-badge small" data-icon="factory"></i>
          <strong>Factory Route</strong>
          <span>Partner-owned factory or approved OEM/ODM resource discussion.</span>
        </div>
        <div class="model-card">
          <i class="icon-badge small" data-icon="ship"></i>
          <strong>Shipment</strong>
          <span>Products ship only after quality and brand approval are completed.</span>
        </div>
      </div>
    </section>

    <section class="quality-section section-shell reveal-on-scroll" id="quality">
      <div class="section-heading">
        <p class="eyebrow">Quality Governance</p>
        <h2>Approved to ship is the core promise.</h2>
      </div>

      <div class="process">
        <article>
          <img class="process-image" src="<?php echo esc_url( aiwa_theme_asset( 'assets/quality/quality-partner-review.png' ) ); ?>" alt="Partner review concept">
          <h3>Partner Review</h3>
          <p>Company background, target market, product category, and channel plan.</p>
        </article>
        <article>
          <img class="process-image" src="<?php echo esc_url( aiwa_theme_asset( 'assets/quality/quality-license-scope.png' ) ); ?>" alt="License scope concept">
          <h3>License Scope</h3>
          <p>Territory, category, trademark usage, and cooperation terms.</p>
        </article>
        <article>
          <img class="process-image" src="<?php echo esc_url( aiwa_theme_asset( 'assets/quality/quality-manufacturing-route.png' ) ); ?>" alt="Manufacturing route concept">
          <h3>Manufacturing Route</h3>
          <p>Factory proposal, OEM/ODM option, production capability discussion.</p>
        </article>
        <article>
          <img class="process-image" src="<?php echo esc_url( aiwa_theme_asset( 'assets/quality/quality-sample-approval.png' ) ); ?>" alt="Sample approval concept">
          <h3>Sample Approval</h3>
          <p>Specifications, design, packaging, branding, and quality inspection.</p>
        </article>
        <article>
          <img class="process-image" src="<?php echo esc_url( aiwa_theme_asset( 'assets/quality/quality-shipment-authorization.png' ) ); ?>" alt="Shipment authorization concept">
          <h3>Shipment Authorization</h3>
          <p>Final approval before mass shipment under the AIWA brand.</p>
        </article>
      </div>
    </section>

    <section class="oem-section section-shell reveal-on-scroll" id="oem">
      <div class="oem-panel">
        <p class="eyebrow">OEM/ODM Cooperation</p>
        <h2>Flexible manufacturing paths, controlled by brand standards.</h2>
        <p>
          The cooperation model allows authorized partners to bring their own factories or discuss existing manufacturing resources with AIWA Electronics International Co., Ltd. The key is not who owns the factory relationship, but whether the final product meets the brand standard.
        </p>
      </div>

      <div class="category-matrix" aria-label="Product category opportunities">
        <div>
          <i class="icon-badge small" data-icon="audio"></i>
          <strong>Audio</strong>
          <span>Speakers, headphones, soundbars, portable audio.</span>
        </div>
        <div>
          <i class="icon-badge small" data-icon="display"></i>
          <strong>Display</strong>
          <span>TV, monitor, visual entertainment products.</span>
        </div>
        <div>
          <i class="icon-badge small" data-icon="home"></i>
          <strong>Home Electronics</strong>
          <span>Market-specific appliance and lifestyle electronics.</span>
        </div>
        <div>
          <i class="icon-badge small" data-icon="plus"></i>
          <strong>New Proposals</strong>
          <span>Evaluated by territory, factory ability, and quality fit.</span>
        </div>
      </div>
    </section>

    <section class="products-section section-shell reveal-on-scroll" id="products">
      <div class="section-heading product-heading">
        <div>
          <p class="eyebrow">Product Portfolio</p>
          <h2>Catalog structure copied into a licensing-ready presentation.</h2>
        </div>
        <p>
          Product categories are shown as potential market programs, with selected product examples brought from the current AIWA international catalog.
        </p>
      </div>

      <div class="catalog-layout">
        <aside class="catalog-menu" aria-label="Product catalog categories">
          <button type="button" class="catalog-tab is-active" data-category="TV">TV</button>
          <button type="button" class="catalog-tab" data-category="Monitor">Monitor</button>
          <button type="button" class="catalog-tab" data-category="Earphone">Earphone</button>
          <button type="button" class="catalog-tab" data-category="Life audiophile">Life audiophile</button>
          <button type="button" class="catalog-tab" data-category="Active Speaker">Active Speaker</button>
          <button type="button" class="catalog-tab" data-category="Radio">Radio</button>
          <button type="button" class="catalog-tab" data-category="Life-Mate">Life-Mate</button>
          <button type="button" class="catalog-tab" data-category="Home Appliances">Home Appliances</button>
          <button type="button" class="catalog-tab" data-category="Connect">Connect</button>
        </aside>

        <div class="catalog-content">
          <div class="series-row" aria-label="Product series" data-series-row>
            <span>Mini Led Series</span>
            <span>Quantum Series</span>
            <span>Z Series</span>
            <span>A Series</span>
            <span>I Series</span>
          </div>

          <div class="product-grid" data-product-grid>
          </div>
        </div>
      </div>
    </section>

    <section class="news-section section-shell reveal-on-scroll" id="news">
      <div class="section-heading product-heading">
        <div>
          <p class="eyebrow">Latest News</p>
          <h2>Market activity and product updates from AIWA international channels.</h2>
        </div>
      </div>
      <?php aiwa_render_news_carousel( function () { ?>
      <div class="news-carousel" aria-label="AIWA latest news carousel">
        <button class="news-control news-control-prev" type="button" data-news-prev aria-label="Previous news"></button>
        <div class="news-list" data-news-track>
          <a class="news-card" href="https://www.int-aiwa.com/news_detail.php?id=88" target="_blank" rel="noreferrer">
            <img src="<?php echo esc_url( aiwa_theme_asset( 'assets/news/news-india-marketing.jpeg' ) ); ?>" alt="Aiwa India's Marketing Triumphs preview">
            <span>October 04, 2023</span>
            <h3>Aiwa India's Marketing Triumphs: A Showcase of Success</h3>
          </a>
          <a class="news-card" href="https://www.int-aiwa.com/news_detail.php?id=87" target="_blank" rel="noreferrer">
            <img src="<?php echo esc_url( aiwa_theme_asset( 'assets/news/news-ifa-berlin.jpeg' ) ); ?>" alt="Aiwa Europe IFA Berlin 2023 preview">
            <span>September 27, 2023</span>
            <h3>Aiwa Europe Unveils 2024 Product Lineup at IFA Berlin 2023</h3>
          </a>
          <a class="news-card" href="https://www.int-aiwa.com/news_detail.php?id=86" target="_blank" rel="noreferrer">
            <img src="<?php echo esc_url( aiwa_theme_asset( 'assets/news/news-iran-service.jpeg' ) ); ?>" alt="Aiwa Iran service centre preview">
            <span>September 25, 2023</span>
            <h3>Aiwa Iran's State-of-the-Art After-Sales Service Centres & Specialized Central Inventory Warehouse Facility</h3>
          </a>
          <a class="news-card" href="https://www.int-aiwa.com/news_detail.php?id=85" target="_blank" rel="noreferrer">
            <img src="<?php echo esc_url( aiwa_theme_asset( 'assets/news/news-india-marketing.jpeg' ) ); ?>" alt="Aiwa Iran charity event preview">
            <span>September 18, 2023</span>
            <h3>Aiwa Iran HQ Spreads Love Through Charity Event</h3>
          </a>
          <a class="news-card" href="https://www.int-aiwa.com/news_detail.php?id=84" target="_blank" rel="noreferrer">
            <img src="<?php echo esc_url( aiwa_theme_asset( 'assets/news/news-india-marketing.jpeg' ) ); ?>" alt="Aiwa India newspaper campaign preview">
            <span>September 05, 2023</span>
            <h3>Celebrating Aiwa India's Remarkable Newspaper Advertising Campaign Efforts</h3>
          </a>
          <a class="news-card" href="https://www.int-aiwa.com/news_detail.php?id=83" target="_blank" rel="noreferrer">
            <img src="<?php echo esc_url( aiwa_theme_asset( 'assets/news/news-m-series-monitor.jpeg' ) ); ?>" alt="AIWA TWS earbuds mini facelift preview">
            <span>July 26, 2023</span>
            <h3>AIWA: TWS Earbuds Mini Facelift</h3>
          </a>
          <a class="news-card" href="https://www.int-aiwa.com/news_detail.php?id=82" target="_blank" rel="noreferrer">
            <img src="<?php echo esc_url( aiwa_theme_asset( 'assets/news/news-m-series-monitor.jpeg' ) ); ?>" alt="Aiwa India MI-X440 Enigma Beta coverage preview">
            <span>July 03, 2023</span>
            <h3>Aiwa India 2023: MI-X440 Enigma Beta Coverage on Times of India</h3>
          </a>
          <a class="news-card" href="https://www.int-aiwa.com/news_detail.php?id=81" target="_blank" rel="noreferrer">
            <img src="<?php echo esc_url( aiwa_theme_asset( 'assets/news/news-m-series-monitor.jpeg' ) ); ?>" alt="Aiwa M-Series Monitors preview">
            <span>July 03, 2023</span>
            <h3>New Product Range Release: Aiwa M-Series Monitors</h3>
          </a>
        </div>
        <button class="news-control news-control-next" type="button" data-news-next aria-label="Next news"></button>
      </div>
      <?php } ); ?>
    </section>

    <section class="inquiry-section section-shell reveal-on-scroll" id="inquiry">
      <div>
        <p class="eyebrow">Partner Inquiry</p>
        <h2>Built to attract serious licensing conversations.</h2>
        <p>
          A high-end B2B site should guide visitors into a structured inquiry, collecting the information needed before a licensing discussion begins.
        </p>
      </div>

      <form class="inquiry-form">
        <label>
          Target Market
          <input type="text" placeholder="e.g. Thailand, UAE, Mexico">
        </label>
        <label>
          Product Category
          <select>
            <option>Audio</option>
            <option>Display</option>
            <option>Home Electronics</option>
            <option>New Category Proposal</option>
          </select>
        </label>
        <label>
          Manufacturing Route
          <select>
            <option>We have our own factory</option>
            <option>We want to discuss AIWA-approved OEM/ODM resources</option>
            <option>Not yet decided</option>
          </select>
        </label>
        <label>
          Company Background
          <textarea rows="4" placeholder="Distribution channels, annual volume, company profile"></textarea>
        </label>
        <button class="button primary" type="button">Submit Inquiry</button>
      </form>
    </section>
  </main>
<?php get_footer(); ?>
