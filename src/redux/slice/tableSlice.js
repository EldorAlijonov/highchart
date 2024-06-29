import { createSlice } from "@reduxjs/toolkit";

export const tableSlice = createSlice({
    name: "table",
    initialState: {
        value: []
    },
    reducers: {
        tableSelectedItems: (state, action) => {
            state.value = [...state.value, action.payload];
            // console.log(state.value);
        },
    }

});


export const { tableSelectedItems } = tableSlice.actions;

export default tableSlice.reducer;
