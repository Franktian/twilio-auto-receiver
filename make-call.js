const accountSid = 'AC3c09391d2ec4baabe8d96e39a0a2211a';
const authToken = 'e2dfec0d842c99e404d7706606b7ec3a';

const client = require('twilio')(accountSid, authToken);

client.calls.create({
    url: 'http://demo.twilio.com/docs/voice.xml',
    to: '+14162689329',
    from: '+16479510229'
}, function(err, call) {
    if (err) {
        console.log(err);
    } else {
        console.log(call.sid);
    }
});
