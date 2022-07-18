import React from "react";
import "../../App.css";
import { Box, Button, Typography } from "@mui/material";
import Navbar from "../../Components/Navbar";

function Home() {
  return (
    <Box
      className="Home"
      height="100vh"
      paddingX="10em"
      data-testid="portfolio-page"
    >
      <Navbar />
      <Box
        marginTop="5em"
        marginLeft="5em"
        display="flex"
        flexDirection="column"
        gap="20em"
        maxWidth={"50em"}
      >
        <Typography variant="h4" color="#FF31AD">
          Hi, my name is
        </Typography>
        <Typography variant="h1" color="#ffffff">
          Sam Jones
        </Typography>
        <Typography variant="h2" color="#B0B5BC">
          Full Stack Developer. Desiging and implementing interactive web
          experiences
        </Typography>
        <Button
          variant="outlined"
          href="mailto:samjojames@gmail.com"
          target="_blank"
          sx={{ maxWidth: "150px", color: "#FF31AD", borderColor: "#FF31AD" }}
        >
          Get in touch!
        </Button>
      </Box>
      {/* <IconList /> */}
    </Box>
  );
}

export default Home;
