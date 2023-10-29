import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH_API as authApi } from "../../config";
//import { navigate } from "../navigationRef";

const initialState = { dark_mode: '', username: null, email: null, errorMessage: 'Josco Lee', isLoading: true, isLoggedIn: false, id: null }



const authReducer = (state, action) => {
    switch (action.type) {

        case 'add_error':
            return { ...state, errorMessage: action.payload }
        // case 'SIGN_UP':
        //     return { ...state, token: action.payload,isLoggedIn: false }
        case 'DARK_MODE':
    
        default: state;
    }
}



const signup = (dispatch) => {
    return async ({ username, email, password }) => {
        try {
            //const response = await authApi.post('/users/register', { username, email, password });            
            //await AsyncStorage.setItem('token', response.data.token)

            // dispatch({ type: 'SIGN_UP', payload:false })


            await authApi.post('/users/register', { username, email, password });

            dispatch({ type: 'SIGN_UP' })

        } catch (err) {
            dispatch({ type: 'add_error', payload: "Something went wrong with sign up" })
        }

    }
}


export const { Provider, Context } = createDataContext(
    preferenceReducer,
    { signup, signout, signin, clearErrorMessage, tryLocalSignin },
    initialState
);