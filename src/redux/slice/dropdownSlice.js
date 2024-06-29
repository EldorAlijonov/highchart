import { createSlice } from "@reduxjs/toolkit";

export const dropdownSlice = createSlice({
    name: "dropdown",
    initialState: {
        value: []
    },
    reducers: {
        dropdownSelectedItems: (state, action) => {
            state.value = [...state.value, action.payload];
        }
    }

});


export const { dropdownSelectedItems } = dropdownSlice.actions;

export default dropdownSlice.reducer;
