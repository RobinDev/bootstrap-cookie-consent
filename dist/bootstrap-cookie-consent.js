var BootstrapCookieConsent = (function (Cookies,EventEmitter) {
    'use strict';

    Cookies = Cookies && Cookies.hasOwnProperty('default') ? Cookies['default'] : Cookies;
    EventEmitter = EventEmitter && EventEmitter.hasOwnProperty('default') ? EventEmitter['default'] : EventEmitter;

    /**
     * @version 0.0.1
     * @author Robin D https://www.robin-d.fr/
     * @license The MIT License (MIT)
     */

    class BootstrapCookieConsent extends CookieConsentApi {
      constructor(conf = {}) {
        const defaultConf = {
          'show_selector': '.cc',
          'accept_id': 'accept-cookie',
          'banner_text': 'Ce site utilise des services tiers susceptible de vous déposer un cookie. Pour une navigation optimale, acceptez-vous de les utiliser sur ce site ?',
          'button_text': 'J\'accepte',
          'banner_id': 'cookies-banner',
          'link_more_info': '#',
          'more_info_label': 'En savoir plus',
          'details_title': 'Vie Privée',
          'details_text': 'Vous pouvez accepter ou refuster l\'utilisation sur ce site de certains services.',
          services: []
        };
        super(conf);
        this._conf = Object.assign({}, defaultConf, conf); //this.cookieConsent = new CookieConsentApi(this._conf);
        //if (this.cookieConsent.isAllConfigured() == false) {

        if (super.isAllConfigured() == false) {
          this._showBanner();
        } //this.cookieConsent.on('allConfigured', ()=>{


        super.on('allConfigured', () => {
          this._hideBanner();
        });
        $(this._conf.show_selector).on('click', () => {
          if (!$('#cookie-modal').length) {
            this._createDetails();
          }

          $('#cookie-modal').modal('show');
        });
      }

      _hideBanner() {
        if ($('#' + this._conf.banner_id).length) {
          $('#' + this._conf.banner_id).remove();
        }
      }

      _showBanner() {
        let banner = '<div id="' + this._conf.banner_id + '" class="alert alert-warning text-center">' + this._conf.banner_text + ' <button class="btn btn-success btn-gradient btn-sm" id="' + this._conf.accept_id + '">' + this._conf.button_text + '</button> <a href="' + this._conf.link_more_info + '">' + this._conf.more_info_label + '</a></div>';
        $(document.body).prepend(banner);
        $('#' + this._conf.accept_id).on('click', () => {
          //this.cookieConsent.acceptAll();
          super.acceptAll();

          this._hideBanner();
        });
      }

      _createDetails() {
        let modal = '<div class="modal fade" id="cookie-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
        modal += '<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header">';
        modal += '<h5 class="modal-title">' + this._conf.details_title + '</h5>';
        modal += '<button type="button" class="close" data-dismiss="modal" aria-label="Fermer"><span aria-hidden="true">&times;</span></button></div>';
        modal += '<div class="modal-body">';
        modal += '<p>' + this._conf.details_text + ' <a href="' + this._conf.link_more_info + '">' + this._conf.more_info_label + '</a></p>';
        modal += '<table class="table"><thead class="thead-light"><tr><th scope="col" class="col-10">Service</th><th scope="col" class="col-2">Accepter</th></tr></thead>';
        modal += '<tbody>';

        this._conf.services.forEach(elem => {
          modal += '<tr><td>' + elem + '</td><td class="text-center">';
          modal += '<span class="switch"><input type="checkbox" class="switch-sm" id="switch-' + elem + '"'; //modal +=(this.cookieConsent.isAccepted(elem) ? ' checked': '')

          modal += super.isAccepted(elem) ? ' checked' : '';
          modal += '><label for="switch-' + elem + '"></label></span>';
          modal += '</td></tr>';
        });

        modal += '</tbody></table></div></div></div></div>';
        $(document.body).append(modal);

        this._conf.services.forEach(elem => {
          $('#switch-' + elem).change(() => {
            console.log('change');

            if ($('#switch-' + elem).is(":checked")) {
              console.log('checked'); //this.cookieConsent.accept(elem);

              super.accept(elem);
            } else {
              this.cookieConsent.refuse(elem);
              super.refuse(elem);
            }
          });
        });
      }

    }

    return BootstrapCookieConsent;

}(Cookies,EventEmitter));
