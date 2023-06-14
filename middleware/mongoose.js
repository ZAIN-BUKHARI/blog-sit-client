import mongoose from "mongoose";

const connect = async () => {
  try {
    // await mongoose.connect('mongodb://localhost:27017/Blog');
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
