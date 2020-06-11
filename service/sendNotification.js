var admin = require("firebase-admin");

var serviceAccount = require("./patientoryconsumerapp-firebase-adminsdk-42tdf-9089fe5def.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://patientory-consumer-app.firebaseio.com",
});

const sendPushNotification = (
  registrationToken = '28dc29a8d46e9af6f8208e8840f4bdffb1fb61f51e7936e87e46bfbaeaef528d',
  notificationTitle,
  notificationBody
) => {
  // Registeration token for device and app combination
  // var registrationToken = "<registration token goes here>";

  // Kind of notification and message to be send using payload
  var payload = {
    notification: {
      title: notificationTitle,
      body: notificationBody,
    },
  };

  var options = {
    priority: "high",
    timeToLive: 60 * 60 * 24,
  };

  // Code to send message using firebase inbuilt method
  admin
    .messaging()
    .sendToDevice(registrationToken, payload, options)
    .then(function (response) {
      console.log("Successfully sent message:", response);
    })
    .catch(function (error) {
      console.log("Error sending message:", error);
    });
};

export default sendPushNotification;
