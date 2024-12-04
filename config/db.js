import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Connect to the MongoDB database
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Ensures proper parsing of the connection string
      useUnifiedTopology: true, // Enables the new connection management engine
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`); // Log the host for clarity
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`); // More descriptive error message
    process.exit(1); // Exit the process with a failure code
  }
};

export default connectDB;
