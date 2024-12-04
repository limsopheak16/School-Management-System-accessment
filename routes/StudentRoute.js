import express from "express";
import { createStudent } from "../controllers/studentsController.js";

const router = express.Router();

// Route to create a new student
router.post("/create", createStudent);

export default router;
