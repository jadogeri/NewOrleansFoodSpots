import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { selectSessionState } from '../redux/feature/session/sessionSlice';


const UserData = () => {
    const session = useSelector(selectSessionState);
    console.log("session data in Header tag === ",session)
  return (
    <>
        <h1><strong>User Data == {process.env.REACT_APP_BASE_URL}</strong></h1>
        <p>username == {session.username}</p>
        <p>email == {session.email}</p>
        -------------------------------------
        <h1><strong>ALL Data</strong></h1>
        <p>{JSON.stringify(session,null,2)}</p>

    </>
  )
}

export default UserData