import React, {useEffect, useContext} from 'react'
import {Context as AuthContext} from '../../context/AuthContext'

const ResolveAuthScreen = (props) => {
    const {tryLocalSignin} = useContext(AuthContext);
    //setNavigator(props.navigation)

    useEffect(() => {
        tryLocalSignin();
    }, [])
    return null
};

export default ResolveAuthScreen;