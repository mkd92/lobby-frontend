import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Menu,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const user = useSelector((state)=>state.auth.user);
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Lobby
          </Typography>
          {!user && (
            <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "end" }}>
              <Button
                component={Link}
                to="/login"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Sign in
              </Button>
              <Button
                component={Link}
                to="/signup"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Sign up
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
