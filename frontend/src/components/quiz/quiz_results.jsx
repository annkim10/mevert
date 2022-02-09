import React from "react"
import "./quiz.css"
import introvert from "../../assets/introvert.jpg"
import extrovert from "../../assets/extrovert.jpg"

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
                    <div className="score-wrapper">
                        <div className="score-div">
                            <div className="score-header-div">
                                <h1 className="score">{intro}<span>%</span></h1>
                                <p className="score-label">INTROVERT</p>
                            </div>
                            <div className="img-div" >
                                <img className="intro-img" src={introvert} />
                            </div>
                            <div className="descrip-div">
                                <p className="descrip">Introverts are characterized as being reserved, withdrawn, and introspective with small social circles.</p>
                            </div>     
                        </div>
                        <div className="score-div">
                            <div className="score-header-div">
                                <h1 className="score">{extro}<span>%</span></h1>
                                <p className="score-label">EXTROVERT</p>
                            </div>
                            <div className="img-div" >
                                <img className="img" src={extrovert} />
                            </div>
                            <div className="descrip-div">
                                <p className="descrip">Extroverts are typically described as being outgoing, fun-loving, friendly, and talkative.</p>
                            </div>     
                        </div>
                    </div>    
                </div>
                <div className="quiz-results-lower-div">
                    <div className="quiz-results-button-div">
                      <h1>See your curated list of activities</h1>
                      <button onClick={() => this.props.history.push({ pathname:'/activities', state: {extro: extro, intro: intro} })}>GENERATE ACTIVITIES</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuizResults