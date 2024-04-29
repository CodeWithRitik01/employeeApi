import express from "express";
import EmployeeController from "./emplyee.controller.js";
import  uploadss  from "../middlewares/fileupload.middleware.js";

const employeeRouter = express.Router();

const employeeController = new EmployeeController();



employeeRouter.get(
    '/getEmp',
    employeeController.getEmployees
)

employeeRouter.post(
    '/addemployee',
    uploadss.single('imageUrl'),
    employeeController.addEmployee
)

employeeRouter.delete(
    '/delEmp/:id',
    employeeController.deleteEmployee
)

employeeRouter.put(
    '/updateemp/:id',
    employeeController.filterEmployee
)

export default employeeRouter
