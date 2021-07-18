// import data from external file
const { data } = require('./data/demo_data.js')

// import Twilio API keys from your .ENV folder in you API_KEYS.js file
const { keys } = require('./.ENV/API_KEYS')

// Twilio credentials
const accountSid = keys.TWILIO_ACCOUNT_SID;
const authToken = keys.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

//Enter all the phone numbers of recipients here
let recipients = [
    '+16468729355',
    //'+12019855172'
]

//This will create a separate Rest API request for each number
for(let i = 0; i < recipients.length; i++){
    client.messages
        .create({
            // Edit message that will be sent 
            body: 'This is a test from your friendly neighboorhod Spider Man',
            // This is the number that Twilio will send the message from
            from: '+15159817888',
            // This will be the reciever of the message
            to: recipients[i]
        })
        .then(message => console.log(message.sid));
}

