# mobile_share_module

share module for deep link or client protocol

## Method

### Name

mobile_share_module

### Parameter

|key|type|required|description|example|
|---|---|---|---|---|---|
|url|string|required|url you want share|'https://tedshd.io/'|
|fbAppId / fb_app_id|string|no|fb application id|'123456789'|
|twitterText / twitter_text|string|no|it can show text in twitter card|'Share it!'|
|twitterRef / twitter_ref|string|no|url you want share, it can improve twitter card|'https://tedshd.io/'|


### PHP

```PHP
mobile_share_module($url, $fb_app_id = "", $twitter_text = "", $twitter_ref = "");
```

### JavaScript

```JavaScript
mobile_share_module(url, fbAppId, twitterText, twitterRef)
```
