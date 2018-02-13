/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2018-02-13 15:23:22
 * @version 0.1
 */

function mobile_share_module(url, fbAppId, twitterText, twitterRef) {
    if (!url) {
        console.error('url is require');
        return;
    }
    var app_id = (fbAppId) ? '&app_id=' + fbAppId : '';
    var text = (twitterText) ? '&text=' + twitterText : '';
    var ref = (twitterRef) ? '&original_referer=' + twitterRef : '';
    var obj = {
        'line': {
            'href': 'https://line.naver.jp/R/msg/text/?' + encodeURIComponent(url),
            'icon': './img/icon_line_32.png',
            'icon_2x': './img/icon_line_64.png',
        },
        'facebook': {
            'href': 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url),
            'icon': './img/icon_fb_32.png',
            'icon_2x': './img/icon_fb_64.png',
        },
        'messenger': {
            'href': 'fb-messenger://share/?link=' + encodeURIComponent(url) + app_id,
            'icon': './img/icon_messenger_32.png',
            'icon_2x': './img/icon_messenger_64.png',
        },
        'google': {
            'href': 'https://plus.google.com/share?url=' + encodeURIComponent(url),
            'icon': './img/icon_google_32.png',
            'icon_2x': './img/icon_google_64.png',
        },
        'twitter': {
            'href': 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + text + ref,
            'icon': './img/icon_twitter_32.png',
            'icon_2x': './img/icon_twitter_64.png',
        }
    };

    return obj;
}
