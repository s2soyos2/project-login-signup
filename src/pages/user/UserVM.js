import { connect } from 'react-redux'
import { compose } from 'recompose'
import UserV from './UserV'

export default compose(
  connect(
    (state) => ({
      isLogin: state.isLogin
    })
  )
)(UserV)