/****************************************************************************
 * START: MY OVERRIDES                                                      *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:

// PREF: disable Firefox Sync
user_pref("identity.fxaccounts.enabled", false);

// PREF: disable Firefox View
user_pref("browser.tabs.firefox-view", false);
user_pref("browser.tabs.firefox-view-next", false); // [FF119+]
user_pref("browser.firefox-view.feature-tour", "{\"screen\":\"\",\"complete\":true}");

// PREF: do not allow embedded tweets, Instagram, Reddit, and Tiktok posts
user_pref("urlclassifier.trackingSkipURLs", "");
user_pref("urlclassifier.features.socialtracking.skipURLs", "");

// PREF: enable HTTPS-Only Mode
// Warn me before loading sites that don't support HTTPS
// in both Normal and Private Browsing windows.
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);

// PREF: disable disk cache
user_pref("browser.cache.disk.enable", false);

// PREF: enforce certificate pinning
// [ERROR] MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE
user_pref("security.cert_pinning.enforcement_level", 2);

// PREF: delete all browsing data on shutdown
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.siteSettings", false);
user_pref("browser.sessionstore.privacy_level", 2);

// PREF: set DoH provider
user_pref("network.trr.uri", "https://dns.opendns.com/dns-query");

// PREF: enforce DNS-over-HTTPS (DoH)
user_pref("network.trr.mode", 3);
user_pref("network.dns.skipTRR-when-parental-control-enabled", false);

// PREF: require safe SSL negotiation
// [ERROR] SSL_ERROR_UNSAFE_NEGOTIATION
user_pref("security.ssl.require_safe_negotiation", true);

// PREF: disable telemetry of what default browser you use [WINDOWS]
user_pref("default-browser-agent.enabled", false);

// Theme
user_pref("svg.context-properties.content.enabled", true);
user_pref("browser.tabs.tabMinWidth", 66); //76
user_pref("browser.tabs.tabClipWidth", 86); //140

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:

/****************************************************************************************
 * OPTION: INSTANT SCROLLING (SIMPLE ADJUSTMENT)                                       *
****************************************************************************************/
// recommended for 60hz+ displays
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("mousewheel.default.delta_multiplier_y", 275); // 250-400; adjust this number to your liking

/****************************************************************************
 * END: BETTERFOX                                                           *
****************************************************************************/
