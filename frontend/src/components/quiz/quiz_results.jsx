import React from "react"
import "./quiz.css"

class QuizResults extends React.Component {
    
    
    render() {
        console.log("inside results", this.props)
        return (
            <div className="quiz-results-outer-div">
                 <h1>YOUR RESULTS</h1>
            </div>
        )
     
    }
}

export default QuizResults