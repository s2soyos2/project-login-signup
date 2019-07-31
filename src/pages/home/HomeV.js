import React from 'react'
import { Redirect } from 'react-router-dom'

export default class HomeV extends React.Component {
  render() {
    const {handleClick, isLogin} = this.props
    if (!isLogin) return <Redirect to="/login" />
    return (
      <div>
        <h2>Home</h2>
        <button type="button" onClick={handleClick}>Log out</button>
      </div>
    )
  }
}
