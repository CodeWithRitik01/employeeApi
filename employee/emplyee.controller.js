import { employeeModel } from "../emplyeeSchema.js";

export default class EmployeeController{
      async addEmployee(req, res){
      const {name, salary, department} = req.body;
        const newEmployee = await new  employeeModel({
            name: name,
            salary: salary,
            department:department,
        })
        console.log(newEmployee ,"yup");
     
        await newEmployee.save();
      res.send("working");
     }

     async getEmployees(req, res){
      try {
        const employees = await employeeModel.find(); // Assuming employeeModel is a Mongoose model
        const employeeData = employees.map(emp => ({
            id:emp.id,
            name: emp.name,
            salary: emp.salary,
            department: emp.department

        }));
        res.json(employeeData); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
     }

     async deleteEmployee(req, res){
        console.log(req.params.id, "id")
        try{
            
            const employee = await employeeModel.deleteOne({_id:req.params.id});
            console.log("done")
            res.send("done")
            

        }catch(err){
            console.log(err,"this is error")
        }
     }

     async filterEmployee(req, res){
        const {name, salary, department} = req.body;
        console.log(req.body)
        const employee = await employeeModel.findOne({_id:req.params.id});

        employee.updateOne( { name, salary, department } )
        .then(result => {
            console.log('Update result:', result);
        })
        .catch(err => {
            console.error('Update error:', err);
        });
        await employee.save();
        console.log(employee)
        res.status(200).send("done");
     
      
     }
}