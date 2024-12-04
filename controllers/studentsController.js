import StudentModel from "../models/StudentModel.js";

export const createStudent = async (req, res) => {
    try {
        const { IDCard, name, email, password, phone, classAt } = req.body;

        // Validate request
        if (!IDCard || !name || !email || !password || !phone) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const newStudent = new StudentModel({
            IDCard,
            name,
            email,
            password,
            phone,
            classAt,
        });

        await newStudent.save();
        res.status(201).json({ message: "Student created successfully", student: newStudent });
    } catch (error) {
        console.error("Error creating student:", error);
        res.status(500).json({ message: "Error creating student", error: error.message });
    }
};
