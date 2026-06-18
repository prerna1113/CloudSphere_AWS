const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const dashboardRoutes =
require("./routes/dashboardRoutes");

require("dotenv").config();
console.log("JWT_Secret=", process.env.JWT_SECRET);
const app = express();


app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/employees",employeeRoutes);
app.use(
    "/api/dashboard",
    dashboardRoutes
);

app.get("/",(req,res)=>{
    res.json({
        message:"CloudSpere HRMS Backend Running"
    });
});

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server runnin on port ${PORT}`);

});

