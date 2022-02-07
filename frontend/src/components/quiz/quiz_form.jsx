import React from "react";
import "./quiz.css"

class QuizForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            extroversion: 0,
            intravserion: 0,
            quiz: {
                q1: {
                    question: "You're more likely to recharge your batteries by...",
                    a1: "Going out with a group of friends",
                    a2: "Getting some alone time"
                },
                q2: {
                    question: "In general, which of the two are you more likely to feel?",
                    a1: "Bored and understimulated",
                    a2: "Overwhelmed and overstimulated"
                },
                q3: {
                    question: "You tend to find talking to new people...",
                    a1: "Energizing",
                    a2: "Awkward"
                },
                q4: {
                    question: "You feel more yourself when you’re...",
                    a1: "The center of attention",
                    a2: "In the background"
                },
                q5: {
                    question: "In your free time on the weekend, you'd prefer...",
                    a1: "Mingling at a party filled with people you've never met before",
                    a2: "Sharing a deep conversation with a good friend"
                },
                q6: {
                    question: "You usually get more joy out of...",
                    a1: "Watching a great movie",
                    a2: "Reading a great book"
                },
                q7: {
                    question: "You would hate working with someone who’s...",
                    a1: "Timid and meek",
                    a2: "Brash and overbearing"
                },
                q8: {
                    question: "The people who know you best are more likely to describe you as someone who’s...",
                    a1: "Outgoing and talkative",
                    a2: "Quiet and reflective"
                },
                q9: {
                    question: "You’re more productive when you’re...",
                    a1: "In a cafe",
                    a2: "In a quiet room"
                },
                q10: {
                    question: "When you meet someone for the first time...",
                    a1: "You usually do most of the talking",
                    a2: "You usually do most of the listening"
                }
            },
            questionCount: 0
        }
        this.questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10']
    }

    // componentDidMount() {
      
    // }

    renderQuestions(field) {
        if (field === 'q10') {
            return(
            <div className="question-div">
                <p className="question">{this.state.quiz[field].question}</p>
                <div className="question-choice-div">
                    <input type="radio" className="quiz-question-radio-buttons" id="a1"/>
                    <label htmlFor="a2">{this.state.quiz[field].a1}</label>
                </div>
                <div className="question-choice-div">
                    <input type="radio" className="quiz-question-radio-buttons" id="a2"/>
                    <label htmlFor="a2">{this.state.quiz[field].a2}</label>
                </div>
                <button className="quiz-submit-button" 
                    onClick={() => this.setState({questionCount: this.state.questionCount + 1})}>
                    GET RESULTS
                </button>
            </div>
            )
        } else {
            return(
                <div className="question-div">
                    <p className="question">{this.state.quiz[field].question}</p>
                    <div className="question-choice-div">
                        <input type="radio" className="quiz-question-radio-buttons" id="a1"/>
                        <label htmlFor="a2">{this.state.quiz[field].a1}</label>
                    </div>
                    <div className="question-choice-div">
                        <input type="radio" className="quiz-question-radio-buttons" id="a2"/>
                        <label htmlFor="a2">{this.state.quiz[field].a2}</label>
                    </div>
                    <button className="quiz-next-button" 
                        onClick={() => this.setState({questionCount: this.state.questionCount + 1})}>
                        NEXT
                    </button>
                </div>
            )
        }  
       
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