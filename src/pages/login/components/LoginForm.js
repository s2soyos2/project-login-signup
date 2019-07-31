import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import '../../../App.css'

export default class LoginForm extends React.Component {
  render() {
    const {errorUser, errorEmail, errorPassword} = this.props
    return (
      <div>
        <Button variant="primary" type="submit" className="container">
          LOGIN
        </Button>
        {
          errorUser && errorEmail && errorPassword && (
            <p className='error'>{errorUser}</p>
          )
        }
        <hr></hr>
        <Link to='/signup'><p className='signup'>Create Account</p></Link>
      </div>  
    )
  }
}