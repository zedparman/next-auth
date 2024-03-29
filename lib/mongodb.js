import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/nextAuth");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error)
    }
}