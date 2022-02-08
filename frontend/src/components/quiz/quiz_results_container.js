import { connect } from 'react-redux';
import { postQuiz } from '../../actions/quiz_actions';
import QuizResults from './quiz_results';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.isAuthenticated,
    errors: state.errors.session,
    user: state.session.user,
    quiz: state.quiz
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