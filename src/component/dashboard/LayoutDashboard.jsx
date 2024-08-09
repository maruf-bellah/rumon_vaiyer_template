import React from "react";
import SideBar from "./SideBar";
import { Box } from "@mui/material";

const LayoutDashboard = ({ darkMoodFunc }) => {
  return (
    <Box>
      <SideBar darkMoodFunc={darkMoodFunc} />
    </Box>
  );
};

export default LayoutDashboard;
