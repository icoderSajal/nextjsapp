import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("object");
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
