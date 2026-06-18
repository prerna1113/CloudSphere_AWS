

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import { Link } from "react-router-dom";

import {
  Grid,
  Card,
  CardContent,
  Typography
} from "@mui/material";

function Dashboard() {

  const [stats, setStats] = useState({
    totalEmployees: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {

    try {

      const response =
        await api.get("/dashboard/stats");

      setStats(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <>
      <Navbar />
      <Link to="/employees">
        View Employees
      </Link>

      <Grid container spacing={3} sx={{ p: 3 }}>

        <Grid item xs={12} md={4}>

          <Card>

            <CardContent>

              <Typography variant="h6">
                Total Employees
              </Typography>

              <Typography variant="h3">
                {stats.totalEmployees}
              </Typography>

            </CardContent>

          </Card>

        </Grid>

      </Grid>
    </>
  );
}

export default Dashboard;