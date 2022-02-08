import React from "react"
import "./quiz.css"

class QuizResults extends React.Component {

    constructor(props) {
        super(props)
    }

    
    
    render() {
        
        const { quiz } = this.props
        if (!quiz) return null 

        const extro = ( quiz.filter(answer => answer === '0').length / 10 ) * 100
        const intro = ( quiz.filter(answer => answer === '1').length / 10 ) * 100

        console.log("inside results props", this.props)
        console.log("inside results extro", extro)
        return (
            <div className="quiz-results-outer-div">
                <h1>YOUR RESULTS</h1>
                <div className="results-div">
                    <h1>You are {extro}% Extrovert, {intro}% Introvert  </h1>
                </div>
                <div className="bar-graph-div">
                    <div className="bar-graph">
                        <progress className="progress-bar" id="file" value={intro} max="100"> {intro.toString() + '%'} </progress>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuizResults