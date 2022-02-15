import React from "react"
import { Link } from "react-router-dom"
import img from "../../assets/splash-img.jpg"
import logo from "../../assets/mevert_logo.png"
import "./splash.css"
import { MdQuiz, MdPersonPin, MdEditCalendar } from "react-icons/md"

class SplashPage extends React.Component {

    constructor(props) {
        super(props)
        console.log("inside splash", this.props )
    }

    renderHeader() {
        console.log(this.props.loggedIn)
        if (this.props.loggedIn) {
            return <h1 className="splash-header">Welcome {this.props.user.firstName} {this.props.user.lastName}</h1>
        } else {
            return <h1 className="splash-header">Everyone is different.</h1>
        }
    }

    renderNavLinks() {
        if (this.props.loggedIn) {
            return (
                <div className="splash-nav-links-div-loggedin-outer">
                    <div className='splash-nav-links-div-loggedin'>
                        <button className="splash-nav-links" onClick={() => this.props.history.push('/quiz')}>TAKE THE QUIZ</button>
                    </div>
                    <div className="splash-upper-right-links">
                        <Link className="splash-upper-right-link" to={`/users/${this.props.user.id}`}>
                            {this.props.user.firstName} {this.props.user.lastName}</Link>
                        <Link className="splash-upper-right-link" to="/activities">ACTIVITIES</Link>
                        <button className="splash-upper-right-link" onClick={() => this.props.logout()}>LOG OUT</button>
                    </div>
                </div>              
            )
        } else {
            return (
                <div className='splash-nav-links-div'>
                    <button className="splash-nav-links" onClick={() => this.props.openModal('signup')}>SIGN UP</button>
                    <button className="splash-nav-links" onClick={() => this.props.openModal('login')}>LOG IN</button>
                </div>
            )
        }
    }

    render() {
        console.log("inside splash", this.props)
        const { loggedIn } = this.props

        return (
            <div className="splash-div">
                <div className="splash-main-div">
                    <img className="splash-img" src={img} />
                    <div className="splash-main-wrapper">
                        <div className="left-wrapper">
                            <img src={logo} className="splash-logo" />
                             <div className="splash-copy-div">
                                 {this.renderHeader()}
                                <p className="splash-main-copy">Carpe Diem <span>your</span> <span>way</span> with personalized activity suggestions.</p>
                            </div>
                            {this.renderNavLinks()}
                        </div>
                <div className="how-to-div">
                    <div className="how-to-inner-div">
                        <h1>how it works :</h1>
                        <div className="how-to-copy-div"> 
                            <div className="how-to-wrapper">
                                <MdQuiz className="how-to-icon"/>
                                <div className="take-quiz-div"> 
                                    <h1 onClick={ loggedIn ? () => this.props.history.push("/quiz") : () => this.props.openModal('login') }>
                                        Take the quiz</h1>
                                    <p>Are you more of an Introvert or an Extrovert?</p>
                                </div>
                            </div>
                            <div className="how-to-wrapper">
                                <MdPersonPin className="how-to-icon"/>
                                <div className="activities-div">
                                    <h1 onClick={ loggedIn ? () => this.props.history.push("/activities") : () => this.props.openModal('login')}>
                                        Get curated activities</h1>
                                    <p>Things to do that are tailored to your personality traits</p>
                                </div>      
                            </div>
                            <div className="how-to-wrapper">
                                <MdEditCalendar className="how-to-icon"/>
                                <div className="planner-div">
                                    <h1 onClick={ loggedIn ? () => this.props.history.push(`/users/${this.props.user.id}`) : () => this.props.openModal('login')}>
                                        Plan and Accomplish</h1>
                                    <p>Get the tools and resources to accomplish each activity</p>
                                </div>
                            </div>
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