import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  userToken: "",
  userSettings: {
    mode: 2,
    subscription: false,
    setting3: "text",
    setting4: "another text",
  },
};

export const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = [...state.user, action.payload];
    },
    addNewKey: (state, action) => {
      state.userSettings = { ...state.userSettings, ...action.payload };
    },
    updateUser: (state, action) => {
      state.user.map((data) =>
        data.id === action.payload.id ? action.payload : data
      );
    },
  },
});

export const { addUser, addNewKey } = userReducer.actions;

export default userReducer.reducer;
