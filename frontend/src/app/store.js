import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import menuReducer from "../features/menu/menuSlice";

export default configureStore({
    reducer: {
        menu : menuReducer
    }
})