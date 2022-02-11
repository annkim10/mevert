import React from "react"
import { Link } from "react-router-dom"
import img from "../../assets/splash-img.jpg"
import logo from "../../assets/mevert_logo.png"
import "./splash.css"
import { MdQuiz, MdPersonPin, MdEditCalendar } from "react-icons/md"

class SplashPage extends React.Component {

    render() {
        return (
            <div className="splash-div">
                <div className="splash-main-div">
                    <img className="splash-img" src={img} />
                    <div className="splash-main-wrapper">
                        <div className="left-wrapper">
                            <img src={logo} className="splash-logo" />
                             <div className="splash-copy-div">
                                <h1 className="splash-header">Everyone is different.</h1>
                                <p className="splash-main-copy">Carpe Diem <span>your</span> <span>way</span> with personalized activity suggestions.</p>
                            </div>
                        </div>
                        <div className='splash-nav-links-div'>
                                <button className="splash-nav-links" onClick={() => this.props.openModal('signup')}>SIGN UP</button>
                                <button className="splash-nav-links" onClick={() => this.props.openModal('login')}>LOG IN</button>
                        </div>
                    </div>
                </div>  
                <div className="how-to-div">
                    <div className="how-to-inner-div">
                        <h1>how it works :</h1>
                        <div className="how-to-copy-div"> 
                            <div className="how-to-wrapper">
                                <MdQuiz className="how-to-icon"/>
                                <div className="take-quiz-div"> 
                                    <Link to="/quiz">Take the quiz</Link>
                                    <p>Are you more of an Introvert or an Extrovert?</p>
                                </div>
                            </div>
                            <div className="how-to-wrapper">
                                <MdPersonPin className="how-to-icon"/>
                                <div className="activities-div">
                                    <h1>Get curated activities</h1>
                                    <p>Things to do that are tailored to your personality traits</p>
                                </div>      
                            </div>
                            <div className="how-to-wrapper">
                                <MdEditCalendar className="how-to-icon"/>
                                <div className="planner-div">
                                    <h1>Plan and Accomplish</h1>
                                    <p>Get the tools and resources to accomplish each activity</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }

};

export default SplashPage