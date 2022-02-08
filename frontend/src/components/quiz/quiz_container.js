import { connect } from 'react-redux';
import { postQuiz } from '../../actions/quiz_actions';
import QuizForm from "./quiz_form";

const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.isAuthenticated,
    errors: state.errors.session,
    user: state.session.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postQuiz: quizResults => dispatch(postQuiz(quizResults))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizForm);