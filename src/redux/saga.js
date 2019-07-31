import { all, takeLatest, call, put } from 'redux-saga/effects'
import { create } from 'apisauce'
import UserRedux from './reducer'

const loginRequest = function* ({email, password}) {
  const api = create({
    baseURL: 'https://vivu-api.herokuapp.com/',
  })
  const {data} = yield call(() => api.post('/api/v1/user/login', { email, password }))
  if ( data.code === 0) {
    yield put(UserRedux.Creators.loginSuccess(data.result.user, data.result.token ))
  } else {
    yield put(UserRedux.Creators.loginFailure(data.message))
  }
}

function* loginSaga() {
  yield takeLatest('LOGIN_REQUEST', loginRequest)
}

const signUp = function* ({ email, password, resolveCb }) {
  const api = create({
    baseURL: 'https://vivu-api.herokuapp.com/',
  })
  const {data} = yield call(() => api.post('/api/v1/user/signup', { email, password }))
  if ( data.code === 0) {
    if(resolveCb) {
      yield resolveCb()
    }
    yield put(UserRedux.Creators.signUpSuccess(data.result.user, data.result.token ))
  } else {
    yield put(UserRedux.Creators.signUpFailure(data.message))
  }
}

function* signUpSaga() {
  yield takeLatest('SIGN_UP', signUp)
}

export default function* rootSaga() {
  yield all([
    loginSaga(),
    signUpSaga(),
  ])
}