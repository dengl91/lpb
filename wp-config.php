<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'overestb_wp10' );

/** MySQL database username */
define( 'DB_USER', 'overestb_wp10' );

/** MySQL database password */
define( 'DB_PASSWORD', 'G.zEh5AuhEy9EJjK3t007' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '8NS9LH9yFAqCbq8aoiXeA6fTDlylGCnvl4qgfdPpynftvkQLY5W4gmRumIGJ3VIB');
define('SECURE_AUTH_KEY',  'j75veW4BBcwmPsdsFfxpcYDzdY9n7D6gXuDuw2gC2NLbMD8UKTSfKozcq6KKy2Mc');
define('LOGGED_IN_KEY',    'y7Yx9mAMp5kQY7jxWJdAsPPGBK20wQRGGsPYynzx2vA0cPHM2aU5DclxrZHWmz50');
define('NONCE_KEY',        'O749MNFjvtKbNxYTxtVtnQWRMGHMJeODj3aOo2oDJWIRbTs6jRPQUTxAIjhjwxyx');
define('AUTH_SALT',        'dKp8ZH8osRmAMip5eqwlw3AeHImcdbT655YdjdkruahkoraGl0rcPdnkHlCGcGH5');
define('SECURE_AUTH_SALT', '0cyyox96D1dyy3NsoW5Ku3eX3uTfciHjdJwuZkPsIfT3eTRyfA25qJNqzr6K5Qmw');
define('LOGGED_IN_SALT',   'RAYVEx1kaSOwXm6rmkOzhUglVYDOKsIsZHleHEdsCAJxRz91s4O6xKTYZ3uxrTAq');
define('NONCE_SALT',       'IQuV7BBwb4PLbbXnW1IXT57uzZeVN6h3gXWW73fuwVSyOFjlvVZBz9l1my7zlKXW');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');
define('FS_CHMOD_DIR',0755);
define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed externally by Installatron.
 * If you remove this define() to re-enable WordPress's automatic background updating
 * then it's advised to disable auto-updating in Installatron.
 */
define('AUTOMATIC_UPDATER_DISABLED', false);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
