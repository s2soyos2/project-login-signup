import React from 'react'
import { Redirect } from 'react-router-dom'

const UserV = ({ isLogin }) => {
  if (!isLogin) return <Redirect to="/login" />
  return (
    <h2>User</h2>
  )
}
export default UserV