<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
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
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Vq~x3+8(OSQbuFr,d!~lWqG|yh.kyf)xnatsFmBb)xGa}*+XSdu)[2cGD)yp3:6#' );
define( 'SECURE_AUTH_KEY',  'fH%@hAh5~Bjn)jv$3rQ6#OUc|wO}cfv=(y+huS@?HG6?(W.=RPbUPL:EQy^}Z!$C' );
define( 'LOGGED_IN_KEY',    'J7c{~Vvc|8;Js6rk.]2G2Q-&34FcO]425olhik=gg8EB@?SSBw-G+KfymFNcEOc7' );
define( 'NONCE_KEY',        's@OL@a%(ZywGIz8uZFEL2sYdU~~L#a;7$bc+r}*V<73pM#}*O;UL$1^AcP}VfrI!' );
define( 'AUTH_SALT',        'N#c_I7?_&Xm5<d#Ko7,THKVgvy$PF &rWn:WLMqvnhdw%q_$}wxU&L1pUe;MjSzv' );
define( 'SECURE_AUTH_SALT', '9budG-^#I(Sx/@iKR)ioklij9c:^i@l=cnQe-GrjO(jrFZL/Q5@am-Ic+f4|Zylo' );
define( 'LOGGED_IN_SALT',   'j@T+Y:1bB~kiwARtwop{g1Zf5;VR(:YPeZ>e;a|^VMg8VH!`ud_-WvZ+2)]JMSL-' );
define( 'NONCE_SALT',       '}LHPqp FAQy{TF-{1`Wim@KIH9=Ow&f`&y6q_Eb/x&TRWmBmc_>M[!iB;.9i.6Ex' );

/**#@-*/

/**
 * WordPress database table prefix.
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

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
