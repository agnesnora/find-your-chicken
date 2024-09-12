import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  //If it is already connected, dont connect again

  if (connected) {
    console.log("MongoDb is already connected");
    return;
  }

  //Connect to mongoDb

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDb is connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
