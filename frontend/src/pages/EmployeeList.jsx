import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from "@mui/material";

function EmployeeList() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {

    fetchEmployees();

  }, []);

  const fetchEmployees = async () => {

    try {

      const response = await api.get("/employees");

      setEmployees(response.data.employees);

    } catch (error) {

      console.log(error);

    }

  };

  const handleDelete = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this employee?"
  );

  if (!confirmDelete) return;

  try {

    await api.delete(`/employees/${id}`);

    fetchEmployees();

  } catch (error) {

    console.log(error);

  }
};

  return (
  <div>
      <Navbar />
    <h1>Employee List</h1>
    <Link to="/employees/add">
  <Button variant="contained">
    Add Employee
  </Button>
</Link>

    <TableContainer component={Paper}>
      <Table>

        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Employee Code</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>

          {employees.map((employee) => (

            <TableRow key={employee.id}>

              <TableCell>{employee.id}</TableCell>

              <TableCell>
                {employee.employee_code}
              </TableCell>

              <TableCell>
                {employee.first_name} {employee.last_name}
              </TableCell>

              <TableCell>
                {employee.email}
              </TableCell>

              <TableCell>
                {employee.designation}
              </TableCell>

              <TableCell>

  <Link to={`/employees/edit/${employee.id}`}>
    <Button variant="contained">
      Edit
    </Button>

    <Button
    color="error"
    variant="contained"
    onClick={() => handleDelete(employee.id)}
    sx={{ ml: 1 }}
  >
    Delete
  </Button>

  </Link>

</TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>
    </TableContainer>

  </div>
);
}
export default EmployeeList;

