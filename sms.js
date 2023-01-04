// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const emoji = require('./random-emoji');

module.exports = function run(){
  const e = emoji();
client.messages
  .create({
     body: e,
     from: '+17622426436',
     to: '+16319475416'
   })
  .then(message => console.log(message.sid));
  return e;
}