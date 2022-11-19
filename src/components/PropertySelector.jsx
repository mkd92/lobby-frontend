import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Box,
  Modal,
  Typography,
  ListItemText,
  Paper,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React, { useState } from "react";
import AddPropertyModelForm from "./AddPropertyModelForm";

function PropertySelector() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Paper sx={{ height: "auto", width: "30vw", padding: "1rem" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleOpen}>
            <ListItemIcon>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Add Property" />
          </ListItemButton>
        </ListItem>
      </List>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddPropertyModelForm />
        </Box>
      </Modal>
    </Paper>
  );
}

export default PropertySelector;
