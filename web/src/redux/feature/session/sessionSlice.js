import { createSlice } from "@reduxjs/toolkit";



let initialStatetate = {
    username : "user", 
    email : "mail",
    password : "pass",
    roles : [],
    errorMessage : '', 
    isLoading :  true,
    isLoggedIn : false,
    expiration : null 
  
}


const sessionSlice = createSlice({
  name: "session",
  initialState: initialStatetate,

  reducers: {

    setSessionData : (state, action) => {
        return {...state, ...action.payload};
    },
    setUsername : (state , action) =>{
        state.username = action.payload
    },
    setEmail : (state , action) =>{
        state.email = action.payload
    }

  },
});

export const {
    setSessionData,
    setUsername,
    setEmail
} = sessionSlice.actions;

export const selectSessionState= (state) => { return state.session};
// export const selectSessionJur= (state) => { return state.session.jur};
// export const selectSessionTaxYear= (state) => { return state.session.taxyear};

export default sessionSlice.reducer;