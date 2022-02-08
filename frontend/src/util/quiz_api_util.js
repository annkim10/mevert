import axios from 'axios';

export const postQuiz = (quizData) => {
  return axios.post('/api/quiz/results', quizData);
};
