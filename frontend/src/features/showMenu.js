import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
//FIXME: the documentation is contradictory the reducer should return a copy of the state and change the copy if necessary but how?
//FIXME: it seems incredibly complex all I want is an if-else statement to show the menu if login is validated
export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        showMenu: false
    },
    reducers: {
        showMenu: state => {
            state.showMenu = true
        },





    }
})