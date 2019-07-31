import { connect } from 'react-redux'
import UserRedux from '../../redux/reducer'
import HomeV from './HomeV'
import {compose, withHandlers} from 'recompose'

export default compose(
  connect(
    (state) => ({
      isLogin: state.isLogin}
    ),
    (dispatch) => ({
      signOut: () => dispatch(UserRedux.Creators.signOut())
    })
  ),
  
  withHandlers({
    handleClick: ({signOut}) => () => {
      signOut()
    }
  })

)(HomeV)