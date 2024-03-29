import mongoose from "mongoose";

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DataBase is successfully connected.");
  } catch (error) {
    console.log("Error to connect Database."+error);
  }
};
