// import data from external file
const { data } = require('./data/demo_data.js')

// import Twilio API keys from your .ENV folder in you API_KEYS.js file
const { keys } = require('./.ENV/API_KEYS')

// Twilio credentials
const accountSid = keys.TWILIO_ACCOUNT_SID;
const authToken = keys.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


client.calls
      .create({
         url: 'http://demo.wearetitlefight.com/your_voice.xml',
         to: '+16468729355',
         from: '+16468281294'
       })
      .then(call => console.log(call.sid));
