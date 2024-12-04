import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import classRoute from "./routes/classRoute.js";
import studentRoute from "./routes/StudentRoute.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// CORS Configuration
const corsOptions = {
  origin: "http://localhost:5173", // Adjust based on frontend URL
};
app.use(cors(corsOptions));

// Middleware for parsing requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Simple test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Football CMS application." });
});

// API Routes
app.use("/api/class", classRoute);
app.use("/api/student", studentRoute);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
