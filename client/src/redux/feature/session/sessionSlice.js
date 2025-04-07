import { createSlice } from "@reduxjs/toolkit";



let initialState = {
    token : null, 
    email : "",
    username : "",
    errorMessage : '', 
    isLoading :  true,
    isLoggedIn : false,
  
}


const sessionSlice = createSlice({
  name: "session",
  initialState: initialState,

  reducers: {

    setToken : (state, action) => {
        return {...state, 
                token : action.payload};
    },
    setProfile: (state , action) =>{
        state.username = action.payload.username;
        state.email = action.payload.email;
    },
    clearProfile: (state) =>{
        state.username = "";
        state.email = "";
    },
    setLoginStatus : (state , action) =>{
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
    },
    setLogoutStatus : (state ) =>{
        state.token = null;
        state.isLoading = false;
        state.isLoggedIn = false;
        state.username = "";
        state.email = "";
    },
    setError : (state , action) =>{
        state.errorMessage= action.payload
    }

  },
});

export const {
    setLoginStatus,
    setLogoutStatus,
    setProfile,
    setError,
    setToken,
    clearProfile
} = sessionSlice.actions;

export const selectSessionState= (state) => { return state.session};
export const selectSessionError= (state) => { return state.session.errorMessage};

// export const selectSessionJur= (state) => { return state.session.jur};
// export const selectSessionTaxYear= (state) => { return state.session.taxyear};

export default sessionSlice.reducer;