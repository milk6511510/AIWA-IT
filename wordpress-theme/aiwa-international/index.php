<?php
get_header();
?>
<main class="section-shell" style="margin-top: 120px;">
	<?php if ( have_posts() ) : ?>
		<?php while ( have_posts() ) : the_post(); ?>
			<article <?php post_class(); ?>>
				<h1><?php the_title(); ?></h1>
				<?php the_content(); ?>
			</article>
		<?php endwhile; ?>
	<?php else : ?>
		<h1><?php esc_html_e( 'AIWA Electronics International Co., Ltd.', 'aiwa-international' ); ?></h1>
		<p><?php esc_html_e( 'Create a page and assign an AIWA template to begin.', 'aiwa-international' ); ?></p>
	<?php endif; ?>
</main>
<?php
get_footer();
