<?php

function mobile_share_module($url, $fb_app_id = "", $twitter_text = "", $twitter_ref = "")
{
    $app_id = ($fb_app_id) ? '&app_id=' . $fb_app_id : '';
    $text = ($twitter_text) ? '&text=' . $twitter_text : '';
    $ref = ($twitter_ref) ? '&original_referer=' . $twitter_ref : '';
    $arr = [
        'line' => [
            'href' => 'https://line.naver.jp/R/msg/text/?' . urlencode($url),
            'icon' => './img/icon_line_32.png',
            'icon_2x' => './img/icon_line_64.png',
        ],
        'facebook' => [
            'href' => 'https://www.facebook.com/sharer/sharer.php?u=' . urlencode($url),
            'icon' => './img/icon_fb_32.png',
            'icon_2x' => './img/icon_fb_64.png',
        ],
        'messenger' => [
            'href' => 'fb-messenger://share/?link=' . urlencode($url) . $app_id,
            'icon' => './img/icon_messenger_32.png',
            'icon_2x' => './img/icon_messenger_64.png',
        ],
        'pinterest'  [
            'href' => 'https://pinterest.com/pin/create/link/?url=' . urlencode($url),
            'icon' => './img/icon_pinterest_32.png',
            'icon_2x' => './img/icon_pinterest_64.png',
        ],
        'twitter' => [
            'href' => 'https://twitter.com/intent/tweet?url=' . urlencode($url) . $text . $ref,
            'icon' => './img/icon_twitter_32.png',
            'icon_2x' => './img/icon_twitter_64.png',
        ],
    ];

    return $arr;
}


header('Content-Type: application/json; charset=utf-8');
print_r(json_encode(mobile_share_module('http://tedshd.logdown.com/')));

