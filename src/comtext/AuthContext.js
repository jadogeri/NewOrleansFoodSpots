import createDataContext from "./createDataContext";
//import trackerApi from '../api/Tracker'
import AsyncStorage from "@react-native-async-storage/async-storage";
//import { navigate } from "../navigationRef";

const initialState = {token : null,username : null, errorMessage : '', isLoading :  true}

/**
 *  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

 */

const authReducer = (state, action) => {
    switch (action.type) {

        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'SIGN_UP':
            return { ...state, token: action.payload }
        case 'SIGN_IN':
            return { ...state, token: action.payload }
        case 'SIGN_OUT':
            return { errorMessage: '', token: action.payload }
        case 'clear_error_messade':
            return { ...state, errorMessage: '' }
        default: state;
    }
}

const tryLocalSignin = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            dispatch({ type: 'SIGN_IN', payload: token })
            //navigate to main flow navigate('TrackList')
        } else {
            //navigate to authflow navigate('LoginFlow')
        }
    }
}
const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch({ type: 'clear_error_messade' })
    }
}

const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('./signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'SIGN_UP', payload: response.data.token })

        } catch (err) {
            dispatch({ type: 'add_error', payload: "Something went wrong with sign up" })
        }

    }
}

const signin = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('./signin', { email, password });
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'SIGN_IN', payload: response.data.token })

        } catch (err) {
            dispatch({ type: 'add_error', payload: "Something went wrong with sign in" })
        }

    }
}

const signout = (dispatch) => {
    return () => {

    }
}
export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signout, signin, clearErrorMessage, tryLocalSignin },
    initialState
);