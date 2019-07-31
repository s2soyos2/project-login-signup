import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import Feedback from 'react-bootstrap/Feedback'
import '../../../App.css'

export default class SignupForm extends React.Component {
  render() {
    const { values, handleChange, handleBlur, touched, errors, errorSignUp } = this.props
    return (
      <div>
        <Form.Group>
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control
            name='confirmPassword'
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.confirmPassword && errors.confirmPassword}
            type="password"
          />
          <Feedback type='invalid'>
            {errors.confirmPassword}
          </Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="container">
          Submit
        </Button>
        {
          errorSignUp && touched.email && touched.password && touched.confirmPassword && (
            <p className='error'>{errorSignUp}</p>
          )
        }
        <hr></hr>
        <Link to='/'>Log in</Link>
      </div>
    )
  }
}