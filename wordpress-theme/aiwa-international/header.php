<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div class="scroll-backdrop" aria-hidden="true">
	<span class="backdrop-shape shape-one"></span>
	<span class="backdrop-shape shape-two"></span>
	<span class="backdrop-shape shape-three"></span>
</div>
<?php get_template_part( 'template-header-static' ); ?>
