import React from "react";
import "./quiz.css"

class QuizForm extends React.Component {


    render() {
        return(
            <div className="quiz-form-outer-div">
                <div className="quiz-form-header-div">
                    <h1>Tell us more about yourself</h1>
                    <h2>Answer 10 short questions to get your personalized activities</h2>
                </div>
                <form className="quiz-form-container">
                    <label>You’re more likely to recharge your batteries by...</label>
                    
                </form>
            </div>
        )
    }
}


export default QuizForm