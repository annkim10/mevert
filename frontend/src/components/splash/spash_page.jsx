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
                    <p className="splash-main">Carpe Diem <span>your way</span> with personalized activity suggestions.</p>
                </div>
                <div className="how-div">
                    <h1>how it works</h1>
                </div>
                
                <Link to="/quiz">QUIZ</Link>
            </div>
        )
    }

}

export default SplashPage