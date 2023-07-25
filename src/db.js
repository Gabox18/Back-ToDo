import mongoose from "mongoose";
import "dotenv/config";

//require("dotenv").config();

const { URL_DB } = process.env;
(async () => {
  try {
    mongoose.set("strictQuery", true);
    const db = await mongoose.connect(URL_DB);
    console.log("BD connect to", db.connection.name);
  } catch (error) {
    console.log(error, "----------------->", URL_DB);
  }
})();
