import { Box } from "@mui/material";
import React from "react";

function NavLine() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        right: "5em",
      }}
    >
      <Box
        sx={{
          border: "1px solid red",
          height: "100%",
          position: "fixed",
        }}
      ></Box>
    </Box>
  );
}

export default NavLine;
