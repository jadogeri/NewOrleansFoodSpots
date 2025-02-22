import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/apiSlice";
//import authReducer from "./features/auth/authSlice";
import sessionReducer from "./feature/session/sessionSlice"
//import sessionReducer from "./features/session/sessionSlice"
import { userApiSlice } from "./api/user";



export const store = configureStore({
  reducer: {
   // [apiSlice.reducerPath]: apiSlice.reducer,
    //auth: authReducer,    
    [userApiSlice.reducerPath] : userApiSlice.reducer,
    session : sessionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

setupListeners(store.dispatch);

