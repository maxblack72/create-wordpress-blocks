<?php
/**
 * Plugin Name:       Spotwhiskey Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       spotwhiskey-blocks
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function blocks_register_block_category( $categories ) {
    $categories[] = array(
        'slug'  => 'spot-whiskey-blocks',  // The slug (identifier) for your category
        'title' => 'Spot Whiskey Blocks',   // The title to display in the block inserter
    );
    return $categories;
}
add_filter( 'block_categories_all', 'blocks_register_block_category' );


/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_spotwhiskey_blocks_block_init() {
    register_block_type( __DIR__ . '/build/block-a' );
    register_block_type( __DIR__ . '/build/block-b' );
    register_block_type( __DIR__ . '/build/block-c' );
}
add_action( 'init', 'create_block_spotwhiskey_blocks_block_init' );
