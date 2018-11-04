# Be compliant to GDPR (rgpd) like CNIL ask it

## Table of contents
* [Introduction](#introduction)
* [Installation](#installation)
    * [Packagist](https://packagist.org/packages/ropendev/curl)
* [Usage](#usage)
* [Documentation](#documentation)
* [License](#license)
* [Contributors](#contributors)

## Introduction

This small bootstrap/jquery plugin permits to be compliant to GDPR (aka rgpd) like CNIL (France) ask.
Extend [`atillay/cookie-consent-api`](https://github.com/atillay/cookie-consent-api).

## Installation

[Composer](http://getcomposer.org) is recommended for installation.

In one command line :
```bash
npm install bootstrap-cookie-consent
```

## Usage

See `dist/demo.html`

## Documentation

To custom it :

```js
new BootstrapCookieConsent({
    'show_selector'   : '.cc',
    'accept_id'       : 'accept-cookie',
    'banner_text'     : 'Ce site utilise des services tiers susceptible de vous déposer un cookie. Pour une navigation optimale, acceptez-vous de les utiliser sur ce site ?',
    'button_text'     : 'J\'accepte',
    'banner_id'       : 'cookies-banner',
    'link_more_info'  : '#',
    'more_info_label' : 'En savoir plus',
    'details_title'   : 'Vie Privée',
    'details_text'    : 'Vous pouvez accepter ou refuster l\'utilisation sur ce site de certains services.',
    services: ['googleAnalytics', 'youtube']
    cookieName: 'cookie_consent_settings', // From cookie-consent-api
    cookieDuration: 365,
    cookieDomain: null,
});
```

To make the demo work

```bash
npm run-script start
```

## License

MIT (see the `LICENSE` file for details)

## Contributors

* Original author : [Robin - SEO](https://www.robin-d.fr/).
* ...

