var QRCode = require('qrcode');

QRCode.toDataURL('Hagyma!', function (err, url) {
    console.log(url)
});