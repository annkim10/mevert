import { connect } from 'react-redux';
import { withRouter } from "react-router-dom"
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import SplashPage from './spash_page';


const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  user: state.session.user
});

const mapDispatch = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  logout: () => dispatch(logout())
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatch
)(SplashPage));