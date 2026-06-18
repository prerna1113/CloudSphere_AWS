const db = require("../config/db");

const addEmployee = (req,res)=>{

    const{
        employee_code,
        first_name,
        last_name,
        email,
        phone,
        department_id,
        designation,
        salary,
        joining_date
    } = req.body;

    const sql = `
    INSERT INTO employees
    (
    employee_code,
    first_name,
    last_name,
    email,
    phone,
    department_id,
    designation,
    salary,
    joining_date
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
   
`
 ;

 db.query(
        sql,
    [
      employee_code,
      first_name,
      last_name,
      email,
      phone,
      department_id,
      designation,
      salary,
      joining_date
    ],
    (err,result) =>{
        if(err) {
            return res.status(500).json({
                 success: false,
          message: err.message,

            });
        }

        res.status(201).json({
            success:true,
            message:"Employee added successfully",
        });
    }

 );
};


const getEmployees = (req,res) =>{
    const sql = "SELECT * FROM employees";

    db.query(sql,(err,result) => {
        if(err){
            return res.status(500).json({
                success:false,
                message: err.message,
            });
        }

        res.status(200).json({
            success:true,
            employees:result,
        });
    });
};


const getEmployeeById = (req,res) =>{
    const {id} = req.params;

    const sql = "SELECT * FROM employees WHERE id = ?";
    db.query(sql,[id],(err,result) =>{
        if(err){
             return res.status(500).json({
                success:false,
                message:err.message
             });
        }
        if(result.length ===0){
            return res.status(404).json({
                success:false,
                message:'Employee not found'
            });
        }
        res.status(200).json({
            success:true,
            employee:result[0]
        });
    });
};

const updateEmployee = (req, res) => {
//  console.log("BODY:", req.body);
//     console.log("ID:", req.params.id);
   
    const {
        employee_code,
        first_name,
        last_name,
        email,
        phone,
        department_id,
        designation,
        salary,
       
    } = req.body;
     const { id } = req.params;
const joining_date = req.body.joining_date
  ? req.body.joining_date.split("T")[0]
  : null;

    const sql = `
        UPDATE employees
        SET
            employee_code = ?,
            first_name = ?,
            last_name = ?,
            email = ?,
            phone = ?,
            department_id = ?,
            designation = ?,
            salary = ?,
            joining_date = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [
            employee_code,
            first_name,
            last_name,
            email,
            phone,
            department_id,
            designation,
            salary,
            joining_date,
            id
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    success: false,
                    message: "Employee not found"
                });
            }

            res.status(200).json({
                success: true,
                message: "Employee updated successfully"
            });
        }
    );
};


const deleteEmployee = (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM employees WHERE id = ?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Employee not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Employee deleted successfully"
        });
    });
};
module.exports = {
    addEmployee,
    getEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
};