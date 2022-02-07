import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import QuizForm from "./quiz_form";

const mapStateToProps = (state) => {
  return {
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
)(QuizForm);