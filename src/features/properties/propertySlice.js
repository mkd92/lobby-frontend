import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
  name: "property",
  initialState: { property: [] },
  addProperty(state, action) {
    const newProperty = action.payload;
    state.property = [...state.property, newProperty];
  },
});

export const { addProperty } = propertySlice.actions;
export default propertySlice.reducer;
