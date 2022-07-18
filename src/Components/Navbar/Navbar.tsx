import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "../../App.css";

export function Navbar() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      className="Nav"
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingTop: "2em",
        position: "fixed",
        right: "5em",
      }}
    >
      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, color: "#FFFFFF" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
          indicatorColor="primary"
        >
          <Tab label="Home" sx={{ color: "#FFFFFF" }} />
          <Tab label="About Me" sx={{ color: "#FFFFFF" }} />
          <Tab label="Contact" sx={{ color: "#FFFFFF" }} />
        </Tabs>
      </Box>
    </Box>
  );
}

export default Navbar;
