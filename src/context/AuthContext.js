import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH_API as authApi } from "../../config";
//import { navigate } from "../navigationRef";

const initialState = { token: '', username: null, email: null, errorMessage: 'Josco Lee', isLoading: true, isLoggedIn: false, id: null }
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
        case 'RESET':
            return { ...state, errorMessage: 'joseph signed in', isLoggedIn: false, username: null, email: null, id: null, isLoading: false }
        // case 'SIGN_UP':
        //     return { ...state, token: action.payload,isLoggedIn: false }
        case 'SIGN_UP':
            return { ...state, isLoggedIn: false, token: null, isLoading: false }
        // case 'SIGN_IN':
        //     return { ...state, token: action.payload,errorMessage:'joseph signed in',isLoggedIn:true }
        case 'SIGN_IN':
            const { currentUsername, currentEmail, currentId } = action.payload
            console.log("inside of reducer \ncurrent username === " + currentUsername + "\ncurrent email === " + currentEmail + "\ncurrent id === " + currentId)
            return { ...state, errorMessage: 'joseph signed in', isLoggedIn: true, username: currentUsername, email: currentEmail, id: currentId, isLoading: false }
        case 'SIGN_OUT':
            console.log("inside of reducer  before sign out\ncurrent username === " + currentUsername + "\ncurrent email === " + currentEmail + "\ncurrent id === " + currentId)
            return { errorMessage: '', isLoggedIn: false, username: null, email: null, id: null, isLoading: false }
        case 'clear_error_messade':
            return { ...state, errorMessage: '' }
        default: state;
    }
}

// if (Date.now() >= exp * 1000) {
//     return false;
//   }

const tryLocalSignin = (dispatch) => {
    return async () => {
        try {
            const token = await AsyncStorage.getItem('token')
            if (token) {

                //dispatch({ type: 'SIGN_IN', payload: token })
                //navigate to main flow navigate('TrackList')

                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };
                console.log(token)
                const responseUser = await authApi.get('/users/current', config);
                console.log("line 123 auth after getting current user === ", JSON.stringify(responseUser))
                const currentUsername = responseUser.data.username
                const currentEmail = responseUser.data.email
                const currentId = responseUser.data.id
                console.log("current username === " + currentUsername + "\ncurrent email === " + currentEmail + "\ncurrent id === " + currentId)
                dispatch({ type: 'SIGN_IN', payload: { currentUsername, currentEmail, currentId } })

            } else {
                console.log('expired token')
                await AsyncStorage.removeItem('token');
                dispatch({ type: 'RESET' });
            }
        } catch (e) {
            console.log('expired token')
            await AsyncStorage.removeItem('token');
            dispatch({ type: 'RESET' });

        }
    }
}
const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch({ type: 'clear_error_messade' })
    }
}

const signup = (dispatch) => {
    return async ({ username, email, password }) => {
        try {
            await authApi.post('/users/register', { username, email, password });

            dispatch({ type: 'SIGN_UP' })

        } catch (err) {
            dispatch({ type: 'add_error', payload: "Something went wrong with sign up" })
        }

    }
}

const signin = (dispatch) => {
    /**
     *       const response = await apiAuth.post('/api/users/login', { "email": email, "password": password })

            console.log(typeof response.data)

            console.log(JSON.stringify(response.data))
            setData({ ...data, hash: JSON.stringify(response.data) })
     */

    return async (email, password) => {
        try {
            console.log('email: ' + email + ' password: ' + password)
            const response = await authApi.post('/users/login', { "email": email, "password": password });
            const { accessToken } = response.data
            console.log('accessToken ===' + accessToken)
            await AsyncStorage.setItem('token', accessToken)
            const config = {
                headers: { Authorization: `Bearer ${accessToken}` }
            };
            console.log(accessToken)
            const responseUser = await authApi.get('/users/current', config);
            console.log("line 123 auth after getting current user === ", JSON.stringify(responseUser))
            const currentUsername = responseUser.data.username
            const currentEmail = responseUser.data.email
            const currentId = responseUser.data.id
            console.log("current username === " + currentUsername + "\ncurrent email === " + currentEmail + "\ncurrent id === " + currentId)


            dispatch({ type: 'SIGN_IN', payload: { currentUsername, currentEmail, currentId } })

        } catch (err) {
            dispatch({ type: 'add_error', payload: "Something went wrong with sign in" })
        }

    }
}

const signout = (dispatch) => {
    return async () => {
        try {
            await AsyncStorage.removeItem('token');
            dispatch({ type: 'SIGN_OUT' })

        } catch (e) {
            console.log(e)
        }

    }
}
export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signout, signin, clearErrorMessage, tryLocalSignin },
    initialState
);