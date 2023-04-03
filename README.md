# QR Code Styler

JavaScript library for generating QR codes with a logo and styling.

### Examples

<p float="left">
<img style="display:inline-block" src="src/assets/facebook_example.png" width="240" />
<img style="display:inline-block" src="src/assets/instagram_example.png" width="240" />
<img style="display:inline-block" src="src/assets/telegram_example.png" width="240" />
</p>

### Usage

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Bell QR Code Styler</title>
    <script type="text/javascript" src="../lib/bell-qr-code-styler.js"></script>
</head>
<body>
    <div id="canvas"></div>
    <script type="text/javascript">
        const qrCode = new QRCodeStyler({
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
        qrCode.append(document.getElementById("canvas"));
    </script>
</body>
</html>
```

### API Documentation

#### QRCodeStyler instance
`new QRCodeStyler(options) => QRCodeStyler`

Param  |Type  |Description
-------|------|------------
options|object|Init object

`options` structure

Property         |Type  |Default Value|Description
-----------------|------|-------------|-----------------------------------------------------
width            |number|`300`        |Size of canvas
height           |number|`300`        |Size of canvas
data             |string|             |The date will be encoded to the QR code
image            |string|             |The image will be copied to the center of the QR code
qrOptions        |object|             |Options will be passed to `qrcode-generator` lib
imageOptions     |object|             |Specific image options, details see below
dotsOptions      |object|             |Dots styling options
backgroundOptions|object|             |QR background styling options

`options.qrOptions` structure

Property            |Type                                              |Default Value
--------------------|--------------------------------------------------|-------------
typeNumber          |number (`0 - 40`)                                 |`0`
mode                |string (`'Numeric' 'Alphanumeric' 'Byte' 'Kanji'`)|
errorCorrectionLevel|string (`'L' 'M' 'Q' 'H'`)                        |`'Q'`

`options.imageOptions` structure

Property          |Type   |Default Value|Description
------------------|-------|-------------|------------------------------------------------------------------------------
hideBackgroundDots|boolean|`true`       |Hide all dots covered by the image
imageSize         |number |`0.4`        |Coefficient of the image size. Not recommended to use ove 0.5. Lower is better

`options.dotsOptions` structure

Property|Type                                |Default Value|Description
--------|------------------------------------|-------------|-----------------
color  |string                              |`'#000'`     |Color of QR dots
type    |string (`'rounded' 'dots' 'square'`)|`'default'`  |Style of QR dots

`options.backgroundOptions` structure

Property|Type  |Default Value
--------|------|-------------
color  |string|`'#fff'`

#### QrCodeStyler methods
`QRCodeStyler.append(container) => void`

Param    |Type       |Description
---------|-----------|-----------
container|DOM element|This container will be used for appending of the QR code

`QRCodeStyler.update(options) => void`

Param  |Type  |Description
-------|------|--------------------------------------
options|object|The same options as for initialization

`QRCodeStyler.download(extension) => void`

Param    |Type                          |Default Value
---------|------------------------------|-------------
extension|string (`'png' 'jpeg' 'webp'`)|`'png'`
