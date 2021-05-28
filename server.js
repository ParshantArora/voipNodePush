var apn = require("apn");

var deviceToken = "52e3692b3bc74640d0e63814b58fa15c38711a6c01314d5dd41db78a7f710a0f";

var service = new apn.Provider({
    cert: './cert.pem', key:'./key.pem', production: false

});

    var note = new apn.Notification();


  note.expiry = Math.floor(Date.now() / 1000) + 60; // Expires 1 minute from now.
  note.badge = 3;
  note.sound = "ping.aiff";
  note.alert = " You have a new message";
  note.payload = {"handle":"fghfhfhf",
    'uuid': '9b894192-bfa5-11eb-8529-0242ac130003',"callerName":"perry", "custom" : "fdsfsfsfsfsf"};
  note.topic = "com.HippaTalks.voip";
  note.priority = 5;
  note.pushType = "background";

  service.send(note, deviceToken).then( (err,result) => {
    if(err) return console.log(JSON.stringify(err));
    return console.log(JSON.stringify(result))
  });