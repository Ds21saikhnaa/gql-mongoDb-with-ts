import mongoose from "mongoose";
export const connectDb = async () => {
    const uri = "mongodb+srv://dashmandalsaikhanbileg:amazon@testamazon.4lbhbua.mongodb.net/?retryWrites=true&w=majority";
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB холбогдлоо : ${conn.connection.host}`);
};
