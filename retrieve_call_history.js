
// CSV Writer package
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  //define the location of the csv. **** CSV FILE MUST BE CREATED IN THE LOCATION *****
  path: './data/call_log.csv', 
  // define column names for the CSV
  header: [
      {id: 'to', title: 'TO'},
      {id: 'duration', title: 'DURATION'},
      {id: 'status', title: 'STATUS'}
  ]
});



// import Twilio API keys from your .ENV folder in you API_KEYS.js file
const { keys } = require('./API_KEYS.js')

// Twilio credentials
const accountSid = keys.TWILIO_ACCOUNT_SID;
const authToken = keys.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

var twilio = require('twilio');
const client = new twilio(accountSid, authToken);

let data = []

// creates promise to retrive all records
client.calls.list({
  from: "+16468281294",
  dateSent: new Date(Date.UTC(2021, 6, 20, 0, 0, 0))
  // limi: 5,
})
  .then(
    callLog => {
      for (let i = 0; i < callLog.length; i++) {
        
        //store records in data variable
        // This will be an array of objects        
        data.push({ 
          to:callLog[i].to ,
          duration: callLog[i].duration,
          status: callLog[i].status,
        })

      }
      
      // create promise, writes an array of objects into a CSV
      csvWriter.writeRecords(data)
        .then(() => {console.log('CSV Creation complete');});
    }  
  )
  