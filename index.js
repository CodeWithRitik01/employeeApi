import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import employeeRouter from "./employee/employee.routes.js";
import { connect } from "./config.js";

const app = express();

const PORT = 4100;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use("/api/employee", employeeRouter);


app.get("/", (req, res)=>{
    res.send("welcome")
})



app.listen(PORT, ()=>{
    console.log("Server is running");
    connect();
})


