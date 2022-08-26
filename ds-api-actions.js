const axios = require("axios");

const TOKEN = ""; // device token

// --- Get Datastream Value by pin ---

axios(`https://fra1.blynk.cloud/external/api/get?token=${TOKEN}&v0`).then(
  (res) => console.log("v0 =", res.data)
);

// --- Get Datastream Value by datastream ID ---

axios(
  `https://fra1.blynk.cloud/external/api/get?token=${TOKEN}&dataStreamId=4`
).then((res) => console.log("DS ID 4 value = ", res.data));

// // --- Get Multiple Datastream Values ---

axios(`https://fra1.blynk.cloud/external/api/get?token=${TOKEN}&v0&v1`).then(
  (res) => console.log("Response = ", res.data)
);

// // --- Update Datastream Value ---

axios(`https://fra1.blynk.cloud/external/api/update?token=${TOKEN}&v0=5`).then(
  () => console.log("Updated DS value")
);

// // --- Update Datastream Value by DS Id ---

axios(
  `https://fra1.blynk.cloud/external/api/update?token=${TOKEN}&dataStreamId=4&value=1`
).then(() => console.log("Updated DS value"));

// // --- Batch Update Datastream Value ---

axios(
  `https://fra1.blynk.cloud/external/api/batch/update?token=${TOKEN}&v0=5&v3=5`
).then(() => console.log("Batch Updated DS value"));

// // --- Update Widget/Datastream Property ---

axios(
  `https://fra1.blynk.cloud/external/api/update/property?token=${TOKEN}&pin=v0&label=test1`
).then(() => console.log("Updated Widget Property"));

// // --- Is Device Connected ---

axios(
  `https://fra1.blynk.cloud/external/api/isHardwareConnected?token=${TOKEN}`
).then((res) => console.log("isConnected", res.data));
