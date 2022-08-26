const axios = require("axios");
const { path } = require("./data");

let index = 0;
const TOKEN = "LCPXZTY-IoMiH-NuAv9ZDREE5__kiDdr"; // device token

setInterval(() => {
  const item = path[index];
  console.log(item);
  axios(
    `https://fra1.blynk.cloud/external/api/update?token=${TOKEN}&v4=${item[0]},${item[1]}`
  ).then(() => console.log("Updated DS value", item));
  index++;
}, 1000);
