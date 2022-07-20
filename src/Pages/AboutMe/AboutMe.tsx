import React from "react";
import { Typography, Box, List, ListItem } from "@mui/material";
import "../../App.css";

function AboutMe() {
  return (
    <Box
      className="About"
      sx={{
        height: "100vh",
        paddingX: "10em",
      }}
    >
      <Box
        sx={{
          paddingTop: "10em",
          color: "#ffffff",
          maxWidth: "40vw",
        }}
      >
        <Box sx={{ borderTop: "2px solid #FF31AD", paddingTop: "3em" }}>
          <Typography variant="h4" sx={{ marginBottom: "60px" }}>
            About me
          </Typography>
        </Box>
        <Typography
          variant="subtitle1"
          sx={{ color: "#B0B5BC", marginBottom: "30px" }}
        >
          Hello! I'm a full stack developer currently working for a startup
          based in the US. But I live a few thousand miles away here in London.
          Most of my work involves designing and implementing reusable and
          extendable components and working with an ever growing team of
          developers. I am always open to new collaborations and a chat about my
          career change. Feel free to send me a message!
        </Typography>
        <Typography variant="subtitle1" color="#B0B5BC">
          Here are some tools I've been working with recently:
        </Typography>
        <List sx={{ textDecoration: "none" }}>
          <ListItem sx={{ paddingLeft: "0" }}>React</ListItem>
          <ListItem sx={{ paddingLeft: "0" }}>Typescript</ListItem>
          <ListItem sx={{ paddingLeft: "0" }}>Node.JS</ListItem>
          <ListItem sx={{ paddingLeft: "0" }}>Next.js</ListItem>
          <ListItem sx={{ paddingLeft: "0" }}>Express</ListItem>
          <ListItem sx={{ paddingLeft: "0" }}>Material UI</ListItem>
          <ListItem sx={{ paddingLeft: "0" }}>StoryBook</ListItem>
          <ListItem sx={{ paddingLeft: "0" }}>Figma</ListItem>
          <ListItem sx={{ paddingLeft: "0" }}>AWS, Docker, Terraform</ListItem>
          <ListItem sx={{ paddingLeft: "0" }}>Prisma</ListItem>
          <ListItem sx={{ paddingLeft: "0" }}>
            JEST, Playwright, React Test Library
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default AboutMe;
