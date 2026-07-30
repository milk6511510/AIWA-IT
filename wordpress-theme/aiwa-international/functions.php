<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function aiwa_theme_asset( $path ) {
	return get_theme_file_uri( '/assets/' . ltrim( $path, '/' ) );
}

function aiwa_theme_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'custom-logo' );

	register_nav_menus(
		array(
			'primary' => __( 'Primary Navigation', 'aiwa-international' ),
		)
	);
}
add_action( 'after_setup_theme', 'aiwa_theme_setup' );

function aiwa_theme_enqueue_assets() {
	$product_data = aiwa_get_product_catalog_data();

	wp_enqueue_style(
		'aiwa-google-fonts',
		'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+TC:wght@400;500;700&display=swap',
		array(),
		null
	);

	wp_enqueue_style(
		'aiwa-site',
		aiwa_theme_asset( 'styles.css' ),
		array( 'aiwa-google-fonts' ),
		'1.0.0'
	);

	wp_enqueue_script(
		'aiwa-site',
		aiwa_theme_asset( 'script.js' ),
		array(),
		'1.0.0',
		true
	);

	wp_add_inline_script(
		'aiwa-site',
		'window.aiwaTheme = ' . wp_json_encode(
			array(
				'assetBase' => trailingslashit( aiwa_theme_asset( '' ) ),
				'homeUrl'   => home_url( '/' ),
			)
		) . ';' . ( $product_data ? 'window.aiwaProductData = ' . wp_json_encode( $product_data ) . ';' : '' ),
		'before'
	);
}
add_action( 'wp_enqueue_scripts', 'aiwa_theme_enqueue_assets' );

function aiwa_get_product_catalog_data() {
	$products = new WP_Query(
		array(
			'post_type'      => 'aiwa_product',
			'posts_per_page' => 120,
			'orderby'        => array(
				'menu_order' => 'ASC',
				'title'      => 'ASC',
			),
		)
	);

	if ( ! $products->have_posts() ) {
		return array();
	}

	$data = array();

	while ( $products->have_posts() ) {
		$products->the_post();
		$category = get_post_meta( get_the_ID(), 'aiwa_category', true );
		$series   = get_post_meta( get_the_ID(), 'aiwa_series', true );
		$image    = get_the_post_thumbnail_url( get_the_ID(), 'large' );

		$category = $category ? $category : 'TV';
		$series   = $series ? $series : $category;

		if ( ! isset( $data[ $category ] ) ) {
			$data[ $category ] = array(
				'series'   => array(),
				'products' => array(),
			);
		}

		if ( ! in_array( $series, $data[ $category ]['series'], true ) ) {
			$data[ $category ]['series'][] = $series;
		}

		$data[ $category ]['products'][] = array(
			'type'  => $series,
			'name'  => get_the_title(),
			'image' => $image ? $image : aiwa_theme_asset( 'assets/products/tv-zm-gn9u65uhd.jpeg' ),
		);
	}

	wp_reset_postdata();

	return $data;
}

function aiwa_register_content_types() {
	$types = array(
		'aiwa_news'          => array( 'News', 'News Item', 'dashicons-megaphone' ),
		'aiwa_product'       => array( 'Products', 'Product', 'dashicons-products' ),
		'aiwa_country'       => array( 'Countries', 'Country', 'dashicons-admin-site-alt3' ),
		'aiwa_green_product' => array( 'Green Products', 'Green Product', 'dashicons-leaf' ),
	);

	foreach ( $types as $post_type => $config ) {
		register_post_type(
			$post_type,
			array(
				'labels'       => array(
					'name'          => $config[0],
					'singular_name' => $config[1],
					'add_new_item'  => 'Add New ' . $config[1],
					'edit_item'     => 'Edit ' . $config[1],
				),
				'public'       => true,
				'show_in_rest' => true,
				'menu_icon'    => $config[2],
				'supports'     => array( 'title', 'editor', 'thumbnail', 'excerpt', 'page-attributes' ),
				'has_archive'  => false,
				'rewrite'      => array( 'slug' => str_replace( 'aiwa_', 'aiwa-', $post_type ) ),
			)
		);
	}
}
add_action( 'init', 'aiwa_register_content_types' );

function aiwa_register_meta_fields() {
	$fields = array(
		'aiwa_external_url',
		'aiwa_category',
		'aiwa_series',
		'aiwa_country_role',
		'aiwa_flag_url',
	);

	foreach ( array( 'aiwa_news', 'aiwa_product', 'aiwa_country', 'aiwa_green_product' ) as $post_type ) {
		foreach ( $fields as $field ) {
			register_post_meta(
				$post_type,
				$field,
				array(
					'type'              => 'string',
					'single'            => true,
					'show_in_rest'      => true,
					'sanitize_callback' => 'sanitize_text_field',
					'auth_callback'     => function () {
						return current_user_can( 'edit_posts' );
					},
				)
			);
		}
	}
}
add_action( 'init', 'aiwa_register_meta_fields' );

function aiwa_meta_box_fields() {
	return array(
		'aiwa_external_url' => 'External URL',
		'aiwa_category'     => 'Category',
		'aiwa_series'       => 'Series',
		'aiwa_country_role' => 'Country Role',
		'aiwa_flag_url'     => 'Flag Image URL',
	);
}

function aiwa_add_meta_boxes() {
	foreach ( array( 'aiwa_news', 'aiwa_product', 'aiwa_country', 'aiwa_green_product' ) as $post_type ) {
		add_meta_box( 'aiwa_details', 'AIWA Details', 'aiwa_render_details_meta_box', $post_type, 'normal', 'default' );
	}
}
add_action( 'add_meta_boxes', 'aiwa_add_meta_boxes' );

function aiwa_render_details_meta_box( $post ) {
	wp_nonce_field( 'aiwa_save_details', 'aiwa_details_nonce' );

	foreach ( aiwa_meta_box_fields() as $key => $label ) {
		$value = get_post_meta( $post->ID, $key, true );
		echo '<p><label for="' . esc_attr( $key ) . '"><strong>' . esc_html( $label ) . '</strong></label><br>';
		echo '<input type="text" id="' . esc_attr( $key ) . '" name="' . esc_attr( $key ) . '" value="' . esc_attr( $value ) . '" style="width:100%;max-width:720px;"></p>';
	}
}

function aiwa_save_details_meta_box( $post_id ) {
	if ( ! isset( $_POST['aiwa_details_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['aiwa_details_nonce'] ) ), 'aiwa_save_details' ) ) {
		return;
	}

	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}

	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}

	foreach ( array_keys( aiwa_meta_box_fields() ) as $key ) {
		if ( isset( $_POST[ $key ] ) ) {
			update_post_meta( $post_id, $key, sanitize_text_field( wp_unslash( $_POST[ $key ] ) ) );
		}
	}
}
add_action( 'save_post', 'aiwa_save_details_meta_box' );

function aiwa_get_featured_image_or_fallback( $post_id, $fallback ) {
	$image = get_the_post_thumbnail_url( $post_id, 'large' );
	return $image ? $image : aiwa_theme_asset( $fallback );
}

function aiwa_render_news_carousel( $fallback_callback ) {
	$news = new WP_Query(
		array(
			'post_type'      => 'aiwa_news',
			'posts_per_page' => 12,
			'orderby'        => 'date',
			'order'          => 'DESC',
		)
	);

	if ( ! $news->have_posts() ) {
		$fallback_callback();
		return;
	}

	echo '<div class="news-carousel" aria-label="AIWA latest news carousel">';
	echo '<button class="news-control news-control-prev" type="button" data-news-prev aria-label="Previous news"></button>';
	echo '<div class="news-list" data-news-track>';

	while ( $news->have_posts() ) {
		$news->the_post();
		$url   = get_post_meta( get_the_ID(), 'aiwa_external_url', true );
		$url   = $url ? $url : get_permalink();
		$image = aiwa_get_featured_image_or_fallback( get_the_ID(), 'assets/news/news-india-marketing.jpeg' );

		echo '<a class="news-card" href="' . esc_url( $url ) . '" target="_blank" rel="noreferrer">';
		echo '<img src="' . esc_url( $image ) . '" alt="' . esc_attr( get_the_title() ) . ' preview">';
		echo '<span>' . esc_html( get_the_date( 'F d, Y' ) ) . '</span>';
		echo '<h3>' . esc_html( get_the_title() ) . '</h3>';
		echo '</a>';
	}

	wp_reset_postdata();

	echo '</div>';
	echo '<button class="news-control news-control-next" type="button" data-news-next aria-label="Next news"></button>';
	echo '</div>';
}

function aiwa_render_country_grid() {
	$countries = new WP_Query(
		array(
			'post_type'      => 'aiwa_country',
			'posts_per_page' => 80,
			'orderby'        => array(
				'menu_order' => 'ASC',
				'title'      => 'ASC',
			),
		)
	);

	echo '<div class="country-grid premium-country-grid" data-country-grid aria-label="AIWA country selector">';

	if ( $countries->have_posts() ) {
		while ( $countries->have_posts() ) {
			$countries->the_post();
			$url      = get_post_meta( get_the_ID(), 'aiwa_external_url', true );
			$flag_url = get_post_meta( get_the_ID(), 'aiwa_flag_url', true );
			$flag_url = $flag_url ? $flag_url : get_the_post_thumbnail_url( get_the_ID(), 'medium' );
			$url      = $url ? $url : get_permalink();

			echo '<a class="country-card" href="' . esc_url( $url ) . '" target="_blank" rel="noreferrer">';
			if ( $flag_url ) {
				echo '<img src="' . esc_url( $flag_url ) . '" alt="' . esc_attr( get_the_title() ) . '">';
			}
			echo '<span>' . esc_html( get_the_title() ) . '</span>';
			echo '</a>';
		}

		wp_reset_postdata();
	}

	echo '</div>';
}
