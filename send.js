var admin = require("firebase-admin");

var serviceAccount = require("./patientoryconsumerapp-firebase-adminsdk-42tdf-9089fe5def.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://patientory-consumer-app.firebaseio.com"
});


// Registeration token for device and app combination
var registrationToken = "eLKi7G4xjmQ:APA91bEjl-Fcyug1K0Rh6iZ0NbSQB8BSNZFLcB9sU7JrUqcDC8daoESRzl3lWQ1CgeRVXxLfh7ojUO1VDOghZdY9vRiWFgu5aBOVE7N1pFGwr-5jE3PC1J1-qBv1bOYREj1ETMs2b-hr";

// Kind of notification and message to be send using payload
var payload = {
    notification: {
      title: "This is a Notification",
      body: "This is the body of the notification message."
    }
  };
  
   var options = {
    priority: "high",
    timeToLive: 60 * 60 *24
  };

// Code to send message using firebase inbuilt method
  admin.messaging().sendToDevice(registrationToken, payload, options)
  .then(function(response) {
    console.log("Successfully sent message:", response);
    // console.log("Successfully sent message:", response.results[0]);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });