import { createSlice } from "@reduxjs/toolkit";



let initialState = {
    username : "", 
    email : "",
  
}


const userSlice = createSlice({
  name: "user",
  initialState: initialState,

  reducers: {

    setUser : (state, action) => {
        return {...state, ...action.payload};
    },
    clearUser : (state ) =>{
        state.username = "";
        state.email = ""
    },
  },
});

export const {
    setUser,
    clearUser,
} = userSlice.actions;

export const getUserData= (state) => { return state.user};

export default userSlice.reducer;