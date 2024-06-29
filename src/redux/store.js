import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from "./slice/dropdownSlice"
import tableReducer from "./slice/tableSlice";

export const store = configureStore({
    reducer: {
        dropdown: dropdownReducer,
        table: tableReducer
    }
});

// Async actions
// RTK Query
// React Query
// Interceptors