export const authReducer = (state, action) => {
    switch (action.type) {

        
        case 'RESET':
            return { ...state, errorMessage: 'joseph signed in', isLoggedIn: false, username: null, email: null, id: null, isLoading: false }
            
        case 'SIGN_UP':
            return { ...state, isLoggedIn: false, token: null, isLoading: false }
        // case 'SIGN_IN':
        //     return { ...state, token: action.payload,errorMessage:'joseph signed in',isLoggedIn:true }
        case 'SIGN_IN':
            return { ...state, token: action.payload.token, isLoggedIn: true, isLoading: false }
        case 'clear_error_messade':
            return { ...state, errorMessage: '' }
        default: 
           return state;
           
    }
}