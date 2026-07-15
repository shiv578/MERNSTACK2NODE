import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/students");
        console.log("Database connected...");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

export default connectDb;