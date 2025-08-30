const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');


const client = new Client({
  puppeteer: {
    executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Client is ready!');
});

// When the client received QR-Code
client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
  console.log('QR Code generated! Scan it with WhatsApp to connect your bot');
});

// Start your client
client.initialize();


// Listening to all incoming messages
client.on('message_create', message => {
	console.log(message.body);
});
