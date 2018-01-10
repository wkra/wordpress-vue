<?php

/*  Register Scripts and Style */

function theme_register_scripts() {
    wp_enqueue_style( 'app-css', get_template_directory_uri() . '/dist/static/css/app.css', array(), '1.0', 'all');
    
    wp_enqueue_script( 'manifest', get_template_directory_uri() . '/dist/static/js/manifest.js' , array(), '1.0', 'all');
    wp_enqueue_script( 'vendor', get_template_directory_uri() . '/dist/static/js/vendor.js' , array(), '1.0', 'all');
    wp_enqueue_script( 'app-js', get_template_directory_uri() . '/dist/static/js/app.js' , array(), '1.0', 'all');

    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
      }
}
add_action( 'wp_enqueue_scripts', 'theme_register_scripts', 1 );

