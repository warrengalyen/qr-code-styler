import QrCodeStyler from '../src';
import logo from "./assets/fb_logo.png";

const qrCode = new QrCodeStyler({
    width: 300,
    height: 300,
    data: "https://www.bellhelmets.com",
    image: logo,

    qrOptions: {
        // typeNumber: 10,
        // errorCorrectionLevel: "H",
    },
    imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.4
    },
    dotsOptions: {
        color: "#4267b2",
        styles: "dots"
    },
    backgroundOptions: {
        color: "#e9ebee"
    }
});

qrCode.append(document.getElementById("canvas"));