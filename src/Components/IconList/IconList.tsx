import { IconButton, Stack } from "@mui/material";
import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CreateIcon from "@mui/icons-material/Create";

export function IconList() {
  return (
    <Stack spacing={2} marginTop="2em" alignItems="flex-start">
      <IconButton
        aria-label="GitHub"
        href="https://github.com/doctone"
        target="_blank"
      >
        <GitHubIcon
          color="secondary"
          href="https://github.com/doctone"
          sx={{ cursor: "pointer" }}
        />
      </IconButton>
      <IconButton
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/sam-james1991/"
        target="_blank"
      >
        <LinkedInIcon color="secondary" />
      </IconButton>
      <IconButton
        aria-label="GitHub"
        href="https://medium.com/@samjojames"
        target="_blank"
      >
        <CreateIcon color="secondary" />
      </IconButton>
    </Stack>
  );
}

export default IconList;
