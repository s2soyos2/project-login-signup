import {compose} from 'recompose'
import LoginV from './loginV'
import { connect } from 'react-redux'
import loginRedux from '../../redux/reducer'
import { withFormik } from 'formik'
import {validate} from './validate'

export default compose(
  connect(
    (state) => ({
      errorUser: state.error
    })
    ,
    (dispatch) => ({
      onLogin: (email, password) => dispatch(loginRedux.Creators.loginRequest(email,password)),
    })
  ),

  withFormik({
    mapPropsToValues() {
      return {
        email: '',
        password: '',
      }
    },

    validationSchema: validate,

    handleSubmit: (value, { props } ) => {
      const {email, password} = value
      props.onLogin(email,password)
    }
  })
  
)(LoginV)
