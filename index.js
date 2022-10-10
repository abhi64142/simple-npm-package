const axios = require("axios");

function trim_new(str, option) {
  try {
    if (typeof str != "string") {
      console.log("type of str = ", typeof str);
      throw Error("trim is only valid on Strings");
    }
    if (option == "space") {
      b = axios.get("https://data.fixer.io/api/latest");
      console.log("bc-------", b);
      str = str.split(" ").join("");
      return str;
    } else if (option == "removeComma") {
      str = str.split(",").join(" ");
      return str;
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = trim_new;
