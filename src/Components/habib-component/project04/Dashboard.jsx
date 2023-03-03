import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "./dashboard.css";
import CancelIcon from "@mui/icons-material/Cancel";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarStyle = {
    transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
  };

  return (
    <div className="dashboard">
      <div className="left" style={sidebarStyle}>
        <CancelIcon
          fontSize="large"
          onClick={toggleSidebar}
          className="cancelIcon"
        />
        <Sidebar />
      </div>

      <div className="right"></div>
    </div>
  );
};

export default Dashboard;
