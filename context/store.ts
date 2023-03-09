//  Importing helper modules
import { configureStore, Store } from "@reduxjs/toolkit";

// Importing reducers
import authReducer from "./authSlice";

const store: Store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;
