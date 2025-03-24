import createDataContext from "./createDataContext";
import { initialState } from "../data/initialState";
import { authReducer } from "../reducers/authReducer";



const signIn = (dispatch)=>{
    return (value)=>{
        try{
            console.log("calling signin in auth context")

            localStorage.setItem("AUTHKEY",value)
            dispatch({ type: 'SIGN_IN', payload: { token: value } });
            
        }catch(e){

        }
    }

}


export const { Provider, Context } = createDataContext(
    authReducer,
    { signIn },
    initialState
);