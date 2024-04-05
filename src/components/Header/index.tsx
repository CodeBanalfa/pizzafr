import React from "react";
import "./style.css";
import { AppBar, Box, Typography } from "@mui/material";

const index = () => {
  return (
    <>
      <AppBar position="static">
        <Box className="headre" display="flex" alignItems="center">
          <img src="/assets/logo.png" alt="" style={{ width: "6.5em" }} />
          <Typography
            variant="h1"
            className="h1"
            style={{ textAlign: "center" }}
          >
            Chez Mario
          </Typography>
        </Box>
      </AppBar>
    </>
  );
};

export default index;
