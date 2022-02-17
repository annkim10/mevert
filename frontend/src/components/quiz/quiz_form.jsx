import React from "react";
import "./quiz.css"
import QuizResults from "./quiz_results";
import { MdOutlineNavigateNext } from "react-icons/md"

class QuizForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            checked: "",
            q1: "",
            q2: "",
            q3: "",
            q4: "",
            q5: "",
            q6: "",
            q7: "",
            q8: "",
            q9: "",
            q10: "",
            quiz: {
                q1: {
                    question: "You're more likely to recharge your batteries by...",
                    answers: ["Going out with a group of friends", "Getting some alone time"]
                },
                q2: {
                    question: "In general, which of the two are you more likely to feel?",
                    answers: ["Bored and understimulated","Overwhelmed and overstimulated" ]
                },
                q3: {
                    question: "You tend to find talking to new people...",
                    answers: ["Energizing", "Awkward"]
                },
                q4: {
                    question: "You feel more yourself when you’re...",
                    answers: ["The center of attention","In the background"]
                },
                q5: {
                    question: "In your free time on the weekend, you'd prefer...",
                    answers: ["Mingling at a party filled with people you've never met before", "Sharing a deep conversation with a good friend"]
                },
                q6: {
                    question: "You usually get more joy out of...",
                    answers: ["Watching a great movie","Reading a great book" ]
                },
                q7: {
                    question: "You would hate working with someone who’s...",
                    answers: ["Timid and meek", "Brash and overbearing"]
                },
                q8: {
                    question: "The people who know you best are more likely to describe you as someone who’s...",
                    answers: ["Outgoing and talkative","Quiet and reflective" ]
                },
                q9: {
                    question: "You’re more productive when you’re...",
                    answers: ["In a cafe","In a quiet room"]
                },
                q10: {
                    question: "When you meet someone for the first time...",
                    answers: ["You usually do most of the talking", "You usually do most of the listening"]
                }
            },
            questionCount: 0
        }
        this.questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10']
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
      window.scroll(0,0)
    }

    handleChange(e) {
        if (this.state.questionCount === 9) {
            this.setState({[e.target.htmlFor]: e.target.id, checked: e.target.innerText})
        } else{
            this.setState({[e.target.htmlFor]: e.target.id, checked: e.target.innerText})
        }
    } 
    
    checkComplete() {
        let question = this.questions[this.state.questionCount]
        if (!this.state[question]) {
            return <h1>Please select an answer</h1>
        } else {
            return null
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        const quizResults = {
            userId: this.props.user.id,
            quiz: [
                this.state.q1,
                this.state.q2,
                this.state.q3,
                this.state.q4,
                this.state.q5,
                this.state.q6,
                this.state.q7,
                this.state.q8,
                this.state.q9,
                this.state.q10
            ]
        }
        this.props.postQuiz(quizResults).then(this.props.history.push('/quiz/results'))
    }

    renderButton() {
         if (this.state.questionCount === 9) {
             return (
                 <div className="button-div">
                     <button className="quiz-form-button" onClick={this.handleSubmit}>GET RESULTS <MdOutlineNavigateNext /> </button>
                 </div>
             )
         } else {
             return (
                 <div className="button-div">
                    {/* <button className="quiz-form-button" onClick={() => this.setState({questionCount: this.state.questionCount + 1})}>NEXT <MdOutlineNavigateNext /></button> */}
                    <button className="quiz-form-button" 
                        onClick={(e) => {
                            e.preventDefault()
                            this.setState({questionCount: this.state.questionCount + 1})
                        }}>
                        NEXT <MdOutlineNavigateNext />
                    </button>
                 </div>
             )
         }
    }
    // , () => {return null}
    renderQuestions(field) {
            return(
                <div className="question-div">
                    <h1>Question: {this.state.questionCount+1} of 10</h1>
                    <p className="question">{this.state.quiz[field].question}</p>
                    <div className="question-choice-div">
                        {this.state.quiz[field].answers.map((answer, idx) => {
                            return (
                                <div key={idx} > 
                                    <label onClick={this.handleChange} className={this.state.checked === answer ? "quiz-question-label-active" : "quiz-question-label"} id={idx} htmlFor={field}>{answer}
                                        <input type="radio" className="quiz-question-input" name={field} id={idx} value={answer} defaultChecked={this.state.checked === idx} />
                                    </label>
                                </div>
                            )}) 
                        }                     
                    </div>
                    {this.renderButton()}
                </div>
            )
    }

    render() {
        return(
            <div className="quiz-form-outer-div">
                <div className="quiz-form-header-div">
                    <h1>Tell us more about yourself</h1>
                    <h2>Answer 10 short questions to get your personalized activities</h2>
                </div>
                <form className="quiz-form-container">
                    {this.renderQuestions(this.questions[this.state.questionCount])}
                </form>
            </div>
        )
    }
}


export default QuizForm