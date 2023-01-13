import mongoose from "mongoose";

(async () => {
  try {
    mongoose.set('strictQuery', true);
    const db = await mongoose.connect("mongodb://localhost:27017/mongo-todo");
    console.log("BD connect to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
