import mongoose from "mongoose";

const connect = async () => {
  try {
    // await mongoose.connect('mongodb://localhost:27017/Blog');
    await mongoose.connect('mongodb+srv://123:123@e-store.uf5qztz.mongodb.net/blogs=true&w=majority');
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
