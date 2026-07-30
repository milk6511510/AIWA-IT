<?php
/*
Template Name: Global Network
*/
get_header(); ?>
<main>
    <section class="global-hero global-hero-image reveal-on-scroll">
      <div class="global-hero-media" aria-hidden="true">
        <img src="<?php echo esc_url( aiwa_theme_asset( 'assets/aiwa-global-hero.png' ) ); ?>" alt="">
      </div>
      <div class="global-hero-copy">
        <p class="eyebrow">Global Network</p>
        <h1>Regional touchpoints connected through one international brand system.</h1>
        <p class="hero-lead">AIWA works with many international cooperation partners and authorized market representatives across regions. This directory provides a clean starting point for visitors to access country-level AIWA pages and understand the wider brand network.</p>
      </div>
    </section>

    <section class="global-directory section-shell reveal-on-scroll">
      <?php aiwa_render_country_grid(); ?>
    </section>
  </main>
<?php get_footer(); ?>
