import express from "express";
import EmployeeController from "./emplyee.controller.js";

const employeeRouter = express.Router();

const employeeController = new EmployeeController();

employeeRouter.post(
    '/addemployee',
    employeeController.addEmployee
)

employeeRouter.get(
    '/getEmp',
    employeeController.getEmployees
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
