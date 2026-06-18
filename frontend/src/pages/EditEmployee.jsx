import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


import {
  Container,
  Paper,
  TextField,
  Typography,
  Button
} from "@mui/material";

import api from "../services/api";

function EditEmployee() {

  const { id } = useParams();

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

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {

    try {

      const response = await api.get(`/employees/${id}`);

      setFormData(response.data.employee);

    } catch (error) {

      console.log(error);

    }
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.put(
        `/employees/${id}`,
        formData
      );

      alert("Employee Updated Successfully");

      navigate("/employees");

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <Container maxWidth="md">
      <Navbar />

      <Paper sx={{ p: 4, mt: 5 }}>

        <Typography variant="h4">
          Edit Employee
        </Typography>

        <form onSubmit={handleSubmit}>

          <TextField
            fullWidth
            margin="normal"
            label="Employee Code"
            name="employee_code"
            value={formData.employee_code}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="First Name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Last Name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
  fullWidth
  margin="normal"
  label="Department ID"
  name="department_id"
  value={formData.department_id || ""}
  onChange={handleChange}
/>

          <TextField
            fullWidth
            margin="normal"
            label="Designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
          >
            Update Employee
          </Button>

        </form>

      </Paper>

    </Container>
  );
}

export default EditEmployee;