export const authReducer = (state, action) => {
    switch (action.type) {
        

        case 'SIGN_OUT':{
            localStorage.removeItem(process.env.REACT_APP_AUTH_KEY)
            return { ...state, isLoggedIn: false, token: null, isLoading: false, searches: [] }
        }
        case 'SIGN_IN':{
            state = { ...state, token: action.payload.token, isLoggedIn: true, isLoading: false , searches:[]}
            localStorage.setItem(process.env.REACT_APP_AUTH_KEY, JSON.stringify(state));
            return state;
        }
        case 'ADD_BUSINESS':{
            state = { ...state, searches: state.searches.push(action.payload)}
            localStorage.setItem(process.env.REACT_APP_AUTH_KEY, JSON.stringify(state));
            return state;
        }
        case 'REMOVE_BUSINESS':{
            state = { ...state, 
                     searches: state.searches.filter((search)=>{
                        return search.term !== action.payload.term
                     }) }
            localStorage.setItem(process.env.REACT_APP_AUTH_KEY, JSON.stringify(state));
            return state;
        }
        case 'clear_error_messade':
            return { ...state, errorMessage: '' }
        default: 
           return state;
           
    }
}