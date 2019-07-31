import React from 'react'
import { Form } from 'react-bootstrap'
import FormInput from '../../components/FormInput'
import SignUpForm from './components/SignupForm'

class SignUpV extends React.Component {
  render() {
    const { values, handleChange, errors, touched, handleBlur, handleSubmit, errorSignUp } = this.props
    return (   
      <Form className="container col-md-3" onSubmit={handleSubmit} >
        <br></br><br></br>
        <h2>Register</h2>

        <FormInput 
          touchedEmail={touched.email} 
          touchedPassword={touched.password}
          errors={errors} 
          handleBlur={handleBlur}
          handleChange={handleChange}
          values={values} 
        />

        <SignUpForm
          values={values} 
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched} 
          errors={errors} 
          errorSignUp={errorSignUp}
        />

      </Form>
    )
  }
}

export default SignUpV