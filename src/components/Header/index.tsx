import React from "react";
import "./style.css";
import { AppBar, Box, IconButton, Typography } from "@mui/material";
import AuthenticationService from "../../Pages/service/AuthenticationService";
import { Logout } from "@mui/icons-material";
interface Props {
  isAuthenticated: boolean;
  setIsAuthenticated: Function;
}

const index = ({ isAuthenticated, setIsAuthenticated }: Props) => {
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
        {isAuthenticated && (
          <>
            <Box>
              <IconButton
                color="inherit"
                onClick={() => {
                  AuthenticationService.logout();
                }}
                title="logout"
              >
                <Logout />
              </IconButton>
            </Box>
          </>
        )}
      </AppBar>
    </>
  );
};

export default index;
