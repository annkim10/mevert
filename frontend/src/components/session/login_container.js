import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import { closeModal } from "../../actions/modal_actions"
import LoginForm from './login';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    loggedIn: state.session.isAuthenticated,
    user: state.session.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);