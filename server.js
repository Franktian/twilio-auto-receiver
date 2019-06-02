const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const app = express();

app.post('/voice', (req, res) => {
    const twiml = new VoiceResponse();

    twiml.play({ digits: 'ww666ww666ww666' });

    res.type('text/xml');
    res.send(twiml.toString());
});

console.log('Something happened!');

app.listen(3000, '0.0.0.0');
