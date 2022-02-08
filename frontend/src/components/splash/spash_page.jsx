import React from "react"
import { Link } from "react-router-dom"
import img from "../../assets/splash-img.jpg"
import "./splash.css"

class SplashPage extends React.Component {

    render() {
        return (
            <div className="splash-div">
                <img className="splash-img" src={img} />
                <div className="splash-copy-div">
                    <h1 className="splash-header">Everyone is different.</h1>
                    <p className="splash-main">Carpe Diem <span>your</span> <span>way</span> with personalized activity suggestions.</p>
                </div>
                <div className="how-to-div">
                    <div className="how-to-inner-div">
                     
                        <h1>how it works</h1>
                        <div className="how-to-copy-div"> 
                            <div className="take-quiz-div">
                                <Link to="/quiz">Take the quiz</Link>
                                <p>Are you more of an Introvert or an Extrovert?</p>
                            </div>
                            <div className="activities-div">
                                <h1>Get personalized activities</h1>
                                <p>Things to do that are tailored to your personality traits</p>
                            </div>
                            <div className="planner-div">
                                <h1>Plan and Accomplish</h1>
                                <p>Get the tools and resources to accomplish each activity</p>
                            </div>
                        </div>
                       
                    </div>
                 
                </div>
                
                
            </div>
        )
    }

}

export default SplashPage