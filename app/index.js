import QrCodeStyler from '../src';
import logo from "./assets/fb_logo_resized.png";

const qrCode = new QrCodeStyler({
    width: 300,
    height: 300,
    data: "Hello!",
    image: logo
});

qrCode.append("#canvas");