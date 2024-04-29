import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    department: String,
    imageUrl:String
});

export const employeeModel = mongoose.model("EmployeeDetail", employeeSchema);