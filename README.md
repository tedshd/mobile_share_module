# mobile_share_module

share module for deep link or client protocol

## Method

### Name

mobile_share_module

### Parameter


#### JavaScript

|key|type|required|description|example|
|---|---|---|---|---|
|url|string|required|url you want share|'https://tedshd.io/'|
|option|object|no|other option||

**option**

|key|type|required|description|example|
|---|---|---|---|---|
|fbAppId|string|no|fb application id|'123456789'|
|twitterText|string|no|it can show text in twitter card|'Share it!'|
|twitterRef|string|no|url you want share, it can improve twitter card|'https://tedshd.io/'|
|iconLine|string|no|if you want to add image, you can use this|'./img/icon_line_32.png'|
|iconLine2x|string|no|if you want to add image, you can use this|'./img/icon_line_64.png'|
|iconFacebook|string|no|if you want to add image, you can use this|'./img/icon_fb_32.png'|
|iconFacebook2x|string|no|if you want to add image, you can use this|'./img/icon_fb_64.png'|
|iconMessenger|string|no|if you want to add image, you can use this|'./img/icon_messenger_32.png'|
|iconMessenger2x|string|no|if you want to add image, you can use this|'./img/icon_messenger_64.png'|
|iconGoogle|string|no|if you want to add image, you can use this|'./img/icon_google_32.png'|
|iconGoogle2x|string|no|if you want to add image, you can use this|'./img/icon_google_64.png'|
|iconTwitter|string|no|if you want to add image, you can use this|'./img/icon_twitter_32.png'|
|iconTwitter2x|string|no|if you want to add image, you can use this|'./img/icon_twitter_64.png'|

**Example**

```JavaScript
var imgUrl = {
  'iconLine': './img/icon_line_32.png',
  'iconLine2x': './img/icon_line_64.png',
  'iconFacebook': './img/icon_fb_32.png',
  'iconFacebook2x': './img/icon_fb_64.png',
  'iconMessenger': './img/icon_messenger_32.png',
  'iconMessenger2x': './img/icon_messenger_64.png',
  'iconGoogle': './img/icon_google_32.png',
  'iconGoogle2x': './img/icon_google_64.png',
  'iconTwitter': './img/icon_twitter_32.png',
  'iconTwitter2x': './img/icon_twitter_64.png'
};

mobile_share_module(url, imgUrl);
```


#### PHP

|key|type|required|description|example|
|---|---|---|---|---|
|url|string|required|url you want share|'https://tedshd.io/'|
|fb_app_id|string|no|fb application id|'123456789'|
|twitter_text|string|no|it can show text in twitter card|'Share it!'|
|twitter_ref|string|no|url you want share, it can improve twitter card|'https://tedshd.io/'|

**Example**

```PHP
mobile_share_module($url, $fb_app_id = "", $twitter_text = "", $twitter_ref = "");
```



## Icon source

https://www.iconfinder.com/
