import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Blog');
    // await mongoose.connect('MONGO_URI=mongodb+srv://123:123@cluster0.c9jro2e.mongodb.net/?retryWrites=true&w=majority');
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
