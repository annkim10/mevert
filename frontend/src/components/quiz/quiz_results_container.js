import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import QuizResults from './quiz_results';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.isAuthenticated,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizResults);