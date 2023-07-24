import mongoose from "mongoose";
import "dotenv/config";

//require("dotenv").config();

//const { URL_DB } = process.env;
(async () => {
  try {
    mongoose.set("strictQuery", true);
    const db = await mongoose.connect("mongodb+srv://gabox:33181891@cluster0.ykdk2yc.mongodb.net/?retryWrites=true&w=majority");
    console.log("BD connect to", db.connection.name);
  } catch (error) {
    console.log(error, "----------------->", URL_DB);
  }
})();
