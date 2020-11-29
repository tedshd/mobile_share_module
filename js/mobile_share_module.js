/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2018-02-13 15:23:22
 * @version 0.1
 */

function mobile_share_module (url, option) {
    if (!url) {
        console.error('url is require');
        return;
    }
    console.log(option);
    var iconLine = (option && option.iconLine) ? option.iconLine : '',
        iconLine2x = (option && option.iconLine2x) ? option.iconLine2x : '',
        iconFacebook = (option && option.iconFacebook) ? option.iconFacebook : '',
        iconFacebook2x = (option && option.iconFacebook2x) ? option.iconFacebook2x : '',
        iconMessenger = (option && option.iconMessenger) ? option.iconMessenger : '',
        iconMessenger2x = (option && option.iconMessenger2x) ? option.iconMessenger2x : '',
        iconTwitter = (option && option.iconTwitter) ? option.iconTwitter : '',
        iconTwitter2x = (option && option.iconTwitter2x) ? option.iconTwitter2x : '',
        iconPinterest = (option && option.iconPinterest) ? option.iconPinterest : '',
        iconPinterest2x = (option && option.iconPinterest2x) ? option.iconPinterest2x : '',
        iconWhatsapp = (option && option.iconWhatsapp) ? option.iconWhatsapp : '',
        iconWhatsapp2x = (option && option.iconWhatsapp2x) ? option.iconWhatsapp2x : '',
        app_id = (option && option.fbAppId) ? '&app_id=' + option.fbAppId : '',
        text = (option && option.twitterText) ? '&text=' + option.twitterText : '',
        ref = (option && option.twitterRef) ? '&original_referer=' + option.twitterRef : '',
        obj = {
            'line': {
                'href': 'https://line.naver.jp/R/msg/text/?' + encodeURIComponent(url),
                'icon': iconLine,
                'icon_2x': iconLine2x,
            },
            'facebook': {
                'href': 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url),
                'icon': iconFacebook,
                'icon_2x': iconFacebook2x,
            },
            'messenger': {
                'href': 'fb-messenger://share/?link=' + encodeURIComponent(url) + app_id,
                'icon': iconMessenger,
                'icon_2x': iconMessenger2x,
            },
            'pinterest': {
                'href': 'https://pinterest.com/pin/create/link/?url=' + encodeURIComponent(url),
                'icon': iconPinterest,
                'icon_2x': iconPinterest2x,
            },
            'twitter': {
                'href': 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + text + ref,
                'icon': iconTwitter,
                'icon_2x': iconTwitter2x,
            },
            'whatsapp': {
                'href': 'whatsapp://send?text=' + encodeURIComponent(url),
                'icon': iconWhatsapp,
                'icon_2x': iconWhatsapp2x,
            }

        };

    return obj;
}
