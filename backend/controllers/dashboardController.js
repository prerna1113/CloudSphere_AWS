const db = require("../config/db");

const getStats = async (req, res) => {

    const employeeQuery =
        "SELECT COUNT(*) AS totalEmployees FROM employees";

    db.query(employeeQuery, (err, employeeResult) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            totalEmployees:
                employeeResult[0].totalEmployees
        });
    });
};

module.exports = {
    getStats
};