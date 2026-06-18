import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import EmployeeList from "../pages/EmployeeList";
import AddEmployee from "../pages/AddEmployeeList";
import EditEmployee from "../pages/EditEmployee";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
     <Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>
      <Route path="/employees" element={<EmployeeList />} />
      <Route 
      path="/employees/add" element={
         <PrivateRoute> <AddEmployee /></PrivateRoute>
     } />
      <Route path="/employees/edit/:id" element={
         <PrivateRoute>  <EditEmployee /> </PrivateRoute>
      
        } />
    </Routes>
  );
}

export default AppRoutes;