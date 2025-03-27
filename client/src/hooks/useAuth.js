export const setAuth  = (token)=>{
    //retrieve data from storage
    let serializedState = localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_KEY)
    //if data exists process request
    if(serializedState){
        let state = JSON.parse(serializedState);
        state.auth.token = token;
        localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_KEY, JSON.stringify(state))
    }

}

export const getAuth  = ()=>{
    //retrieve data from storage
    let serializedState = localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_KEY)
    //if data exists process request
    if(serializedState){
        let state = JSON.parse(serializedState)
        let token = state.auth.token;
        return token;
    }

}

