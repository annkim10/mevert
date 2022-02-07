import React from "react"
import { Link } from "react-router-dom"
import "./splash.css"

class SplashPage extends React.Component {

    render() {
        return (
            <div className="splash-div">
                <h1>Splash</h1>
                <Link to="/quiz">QUIZ</Link>
            </div>
        )
    }

}

export default SplashPage