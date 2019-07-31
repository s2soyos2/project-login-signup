import React from 'react'
import { Form } from 'react-bootstrap'
import LoginForm from './components/LoginForm'
import FormInput from '../../components/FormInput'
import '../../App.css'

class LoginV extends React.Component {
  render() {
    const { values, handleChange, errors, touched, handleSubmit, errorUser, handleBlur } = this.props
    return (   
      <Form className="container col-md-3" onSubmit={handleSubmit} >
        <h2>Sign In</h2>

        <FormInput 
          touchedEmail={touched.email} 
          touchedPassword={touched.password}
          errors={errors} 
          handleBlur={handleBlur}
          handleChange={handleChange}
          values={values} 
        />

        <LoginForm 
          errorUser={errorUser} 
          errorEmail={touched.email} 
          errorPassword={touched.password}
        />

      </Form>
    )
  }
}

export default LoginV