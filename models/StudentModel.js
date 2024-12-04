import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        IDCard: { type: String, required: true },
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        phone: { type: String, required: true },
        classAt: { type: String, required: false },
        createAt: { type: Date, default: Date.now },
        updateAt: { type: Date, default: Date.now },
    },
    { timestamps: true } // Automatically manage createdAt and updatedAt
);

const StudentModel = mongoose.model("Student", studentSchema);

export default StudentModel;
