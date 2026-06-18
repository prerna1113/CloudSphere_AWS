import { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";


import api from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

     localStorage.setItem(
  "token",
  response.data.token
);

navigate("/dashboard");

    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <Container maxWidth="sm">
     
      <Paper sx={{ p: 4, mt: 10 }}>
        <Typography variant="h4" gutterBottom>
          CloudSphere HRMS
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;