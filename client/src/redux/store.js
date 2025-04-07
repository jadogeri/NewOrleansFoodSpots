import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/apiSlice";
import sessionReducer from "./feature/session/sessionSlice"
import userReducer from "./feature/user/userSlice"

import { userApiSlice } from "./api/user/user";
import { businessApiSlice } from "./api/business/business";
import { loadState,saveState } from "../configs/localStorage";

const persistedState = loadState();
delete persistedState.api

export const store = configureStore({
  reducer: {
    [userApiSlice.reducerPath] : userApiSlice.reducer,
    [businessApiSlice.reducerPath] : businessApiSlice.reducer,

    session : sessionReducer,
    user : userReducer
  },
  preloadedState: persistedState,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

setupListeners(store.dispatch);


// Save state to LocalStorage on every state change
store.subscribe(() => {
  saveState(store.getState());
});

export const token =store.getState().session.token
console.log("token ====================================================", token)













