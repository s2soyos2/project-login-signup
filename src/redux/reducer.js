import {createReducer, createActions} from 'reduxsauce'

const initialState = {
  isLogin: false,
  isRegistered: false,
  token: '', 
  user: null,
  error: null,
  errorSignUp : null,
}

const loginRequest = (state, action ) => ({
  ...state,
})

const loginSuccess = (state, action)=> ({
  ...state,
  isLogin: true,
  user: action.user,
  token: action.token,
  error: null,
})

const loginFailure = (state, action) => ({
  ...state,
  error: action.error
})

const signOut = (state, action) => ({
  ...state,
  isLogin : false,
  isRegistered: false,
  token : '',
  user : null,
  error : null,
  errorSignUp: null,
})

const signUp = (state, action) => ({
  ...state,
})

const signUpFailure = (state, action) => ({
  ...state,
  errorSignUp: action.error
})

const signUpSuccess = (state, action)=> ({
  ...state,
  user: action.user,
  token: action.token,
  errorSignUp: null,
  error: null,
  isRegistered: true
})

const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],

  loginSuccess: ['user', 'token' ],
  signOut: [],
  loginFailure: ['error'],

  signUp: ['email', 'password', 'resolveCb'],
  signUpFailure: ['error'],
  signUpSuccess: ['user','token'],
})

const HANDLERS = {
  [Types.LOGIN_REQUEST] : loginRequest,
  
  [Types.LOGIN_SUCCESS] : loginSuccess,
  [Types.SIGN_OUT] : signOut,
  [Types.LOGIN_FAILURE]: loginFailure,

  [Types.SIGN_UP] : signUp,
  [Types.SIGN_UP_FAILURE] : signUpFailure,
  [Types.SIGN_UP_SUCCESS] : signUpSuccess,
}

export default {
  loginRedux: createReducer(initialState, HANDLERS),
  Creators
}