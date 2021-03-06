/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * @see https://git.io/vWdr2
 */
( function () {
	const isWebkit = -1 < navigator.userAgent.toLowerCase().indexOf( 'webkit' ),
		isOpera = -1 < navigator.userAgent.toLowerCase().indexOf( 'opera' ),
		isIe = -1 < navigator.userAgent.toLowerCase().indexOf( 'msie' );

	if (
		( isWebkit || isOpera || isIe ) &&
		document.getElementById &&
		window.addEventListener
	) {
		window.addEventListener(
			'hashchange',
			function () {
				const id = location.hash.substring( 1 );

				if ( ! /^[A-z0-9_-]+$/.test( id ) ) {
					return;
				}

				const element = document.getElementById( id );

				if ( element ) {
					if (
						! /^(?:a|select|input|button|textarea)$/i.test(
							element.tagName
						)
					) {
						element.tabIndex = -1;
					}

					element.focus();
				}
			},
			false
		);
	}
} )();
