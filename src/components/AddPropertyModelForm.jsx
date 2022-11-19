import { Box, Button, TextField } from "@mui/material";
import React from "react";

function AddPropertyModelForm() {
  return (
    <Box component="form" sx={{ display: "flex", flexDirection: "column" }}>
      <TextField
        margin="normal"
        required
        id="propertyName"
        label="Property Name"
        name="propertyName"
        autoFocus
      />
      <TextField
        margin="normal"
        id="propertyAddress"
        label="Property Address"
        name="propertyAddress"
        autoFocus
        multiline
        rows={5}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add Property
      </Button>
    </Box>
  );
}

export default AddPropertyModelForm;
