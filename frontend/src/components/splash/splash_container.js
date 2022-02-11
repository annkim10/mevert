import { connect } from 'react-redux';
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

export default connect(
  mapStateToProps,
  mapDispatch
)(SplashPage);