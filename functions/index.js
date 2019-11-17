const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

//Configure these as environment variables.
const accountSid = functions.config().twilio.sid;
const authToken  = functions.config().twilio.token;

const client = require('twilio')(accountSid, authToken);
    //Retrieve Review update, then send text to "To Number" from Twilio number 
    exports.textStatus = functions.database.ref('/sessions/{event}/review/').onUpdate((change)=>{
        after = change.after.val();
        return client.messages.create({
            body: `You've received ${after} stars!`,
            from: functions.config().twilio.fromnumber,
            to: functions.config().twilio.tonumber
        });
    });
