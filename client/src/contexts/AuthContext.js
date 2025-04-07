import createDataContext from "./createDataContext";
import { initialState } from "../data/initialState";
import { authReducer } from "../reducers/authReducer";



const signIn = (dispatch)=>{
    return async (value)=>{
        try{
            console.log("calling signin in auth context")
            dispatch({ type: 'SIGN_IN', payload: { token: value } });
            
        }catch(e){

        }
    }

}

const signOut =  (dispatch)=>{
    return async ()=>{
        try{
            console.log("calling signout in auth context")
            dispatch({ type: 'SIGN_OUT'});
            
        }catch(e){

        }
    }

}

const addBusinesses =  (dispatch)=>{
    return async (data)=>{
        try{
            console.log("calling signout in auth context")
            dispatch({ type: 'ADD_BUSINESS', payload : data});
            
        }catch(e){

        }
    }

}

const removeBusinesses =  (dispatch)=>{
    return async (searchTerm)=>{
        try{
            console.log("calling signout in auth context")
            dispatch({ type: 'REMOVE_BUSINESS',payload : searchTerm});
            
        }catch(e){

        }
    }

}


export const { Provider, Context } = createDataContext(
    authReducer,
    { signIn, signOut, addBusinesses, removeBusinesses },
    initialState
);