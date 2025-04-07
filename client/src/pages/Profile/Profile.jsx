import React from 'react'
import { useProfileQuery } from '../../redux/api/user/user'

const Profile = () => {
  const { data, isError , isSuccess } = useProfileQuery()
  return (
  
  <>
      <div style={{minHeight:"100vh"}}>Profile
        {JSON.stringify(data, null, 4)}



      </div>

  </>
  )
}

export default Profile