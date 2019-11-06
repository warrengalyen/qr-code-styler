# Bell QR Code Styler

JavaScript library for generating QR codes with a logo and styling.

### Examples

<img src="./app/assets/facebook_example.png" width="640" />
<img src="app/assets/instagram_example.png" width="640" />
<img src="app/assets/telegram_example.png" width="640" />

### Usage

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script type="text/javascript" src="../lib/bell-qr-code-styler.js"></script>
</head>
<body>
    <div id="canvas"></div>
    <script type="text/javascript">
        const qrCode = new QrCodeStyler({
            width: 300,
            height: 300,
            data: "https://www.facebook.com/",
            image: "./assets/fb_logo.png",
            dotsOptions: {
                color: "#4267b2",
                type: "rounded"
            },
            backgroundOptions: {
                color: "#e9ebee",
            }
        });
        qrCode.append("#canvas");
    </script>
</body>
</html>
```

### API

options                          | type                                                   | required | default value
---------------------------------|--------------------------------------------------------|----------|---------------
`width`                          | `number`                                               |          | 300
`height`                         | `number`                                               |          | 300
`data`                           | `string`                                               | true     |
`image`                          | `string`                                               |          |
`qrOptions.typeNumber`           | `number` (`0 - 40`)                                    |          | 0
`qrOptions.mode`                 | `string` (`'Numeric' 'Alphanumeric' 'Byte' 'Kanji'`)   |          |
`qrOptions.errorCorrectionLevel` | `string` (`'L' 'M' 'Q' 'H'`)                           |          | 'L'
`imageOptions.hideBackgroundDots`| `boolean`                                              |          | true
`imageOptions.imageSize`         | `number`                                               |          | 0.4
`dotsOptions.color`             | `string`                                               |          | '#000'
`dotsOptions.type`               | `string`  (`'rounded' 'dots' 'default')                |          | 'default'
`backgroundOptions.colour`       | `string`                                               |          | '#fff'