import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


import {
  Container,
  Paper,
  TextField,
  Typography,
  Button
} from "@mui/material";

import api from "../services/api";

function AddEmployee() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    employee_code: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    department_id: "",
    designation: "",
    salary: "",
    joining_date: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const updatedData = {
      ...formData,
      joining_date: formData.joining_date
        ? formData.joining_date.split("T")[0]
        : null
    };

    await api.put(`/employees/${id}`, updatedData);

    alert("Employee Updated Successfully");
    navigate("/employees");

  } catch (error) {
    console.log(error.response?.data);
  }
};
  return (
    <Container maxWidth="md">
      <Navbar />

      <Paper sx={{ p: 4, mt: 5 }}>

        <Typography variant="h4" gutterBottom>
          Add Employee
        </Typography>

        <form onSubmit={handleSubmit}>

          <TextField
            fullWidth
            margin="normal"
            label="Employee Code"
            name="employee_code"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="First Name"
            name="first_name"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Last Name"
            name="last_name"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Phone"
            name="phone"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Department ID"
            name="department_id"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Designation"
            name="designation"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Salary"
            name="salary"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            type="date"
            name="joining_date"
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
          >
            Save Employee
          </Button>

        </form>

      </Paper>

    </Container>
  );
}

export default AddEmployee;