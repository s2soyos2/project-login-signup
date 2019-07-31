import React from 'react'
import { Form } from 'react-bootstrap'
import Feedback from 'react-bootstrap/Feedback'
import '../App.css'

export default class FormInput extends React.Component {
  render() {
    const {touchedEmail, touchedPassword, errors, handleBlur, handleChange, values } = this.props
    return (
      <div>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name='email' 
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touchedEmail && errors.email}
            type="email" placeholder="Enter your email . . ."
          />
          <Feedback type='invalid'>
            {errors.email}
          </Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name='password' 
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touchedPassword && errors.password}
            type="password" placeholder="Enter your password . . ."
          />
          <Feedback type='invalid'>
            {errors.password}
          </Feedback>
        </Form.Group>

      </div>  
    )
  }
}