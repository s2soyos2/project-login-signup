import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import loginRedux from '../../redux/reducer'
import { withFormik } from 'formik'
import SignUpV from './signupV';
import {validate} from './validate'

export default compose(
  connect(
    (state) => ({
      errorSignUp: state.errorSignUp
    })
    ,
    (dispatch) => ({
      signUp: (email, password, resolveCb) => dispatch(loginRedux.Creators.signUp(email, password, resolveCb)),
    })
  ),

  withHandlers({
    onNavigateLogin: ({ history }) => () => {
      history.push('/')
    }
  }),

  withFormik({
    mapPropsToValues() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
      }
    },

    validationSchema: validate,

    handleSubmit: (value, { props }) => {
      const { email, password } = value
      props.signUp(email, password, props.onNavigateLogin)
    }
  })

)(SignUpV)
