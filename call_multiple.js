// import data from external file
const { data } = require('./data/demo_data.js')

// import Twilio API keys from your .ENV folder in you API_KEYS.js file
const { keys } = require('./API_KEYS.js')

let recipients = data


// Twilio credentials
const accountSid = keys.TWILIO_ACCOUNT_SID;
const authToken = keys.TWILIO_AUTH_TOKEN;

var twilio = require('twilio');
const client = new twilio(accountSid, authToken);

let count = 0

// Change i to start from a certain position on the list
// CHange i < ## to end at certain position on the list
for (let i = 0; i < recipients.length; i++) {

    const number = recipients[i];

    client.calls
        .create({
            friendlyName: 'Vincent For Office',
            machineDetection: 'DetectMessageEnd',
            url: 'https://handler.twilio.com/twiml/EH58ec44933700c1e4491f4a0cb6607cb5',
            to: number,
            from: '+16468281294'
        })
        .then((call) => {
            count = count + 1
            console.log(call.sid)  
            console.log(count)
        });
}
