import React from "react"
import arleen from "../../assets/arleen.jpg"
import kirti from "../../assets/kirti.jpg"
import ann from "../../assets/ann.jpg"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"

class Footer extends React.Component {

    render() {
        return (
            <div className="footer-outer-div">
                <div className="footer-inner-div">
                    <div className="footer-header">
                        <h1>About us</h1>
                        <p>MEvert was designed by a team of software engineers looking to enrich lives one activity at a time. </p>
                    </div>
                   <div className="about-div">
                        <h1>Arleen Pandher</h1>
                        <img className="about-pic" src={arleen} />
                        <ul className="about-links-div">
                            <li className="about-links">
                                <a href="https://www.linkedin.com/in/arleenpandher/" target="_blank">
                                    <FaLinkedinIn className="about-icons" />      
                                </a>
                            </li>
                            <li className="about-links">
                                <a href="https://github.com/arleenpandher" target="_blank">
                                    <FaGithub className="about-icons" />      
                                </a>
                            </li>
                        </ul>
                   </div>
                   <div className="about-div">
                        <h1>Kirti Harode</h1>
                        <img className="about-pic" src={kirti} />
                        <ul className="about-links-div">
                            <li className="about-links">
                                <a href="https://www.linkedin.com/in/kirti-harode-02b35b1b5/" target="_blank">
                                    <FaLinkedinIn className="about-icons" />      
                                </a>
                            </li>
                            <li className="about-links">
                                <a href="https://github.com/Kirti-Harode" target="_blank">
                                    <FaGithub className="about-icons" />      
                                </a>
                            </li>
                        </ul>
                   </div>
                   <div className="about-div">
                        <h1>Ann Kim</h1>
                        <img className="about-pic" src={ann} />
                        <ul className="about-links-div">
                            <li className="about-links">
                                <a href="https://www.linkedin.com/in/ann-kim/" target="_blank">
                                    <FaLinkedinIn className="about-icons" />      
                                </a>
                            </li>
                            <li className="about-links">
                                <a href="https://github.com/annkim10" target="_blank">
                                    <FaGithub className="about-icons" />      
                                </a>
                            </li>
                        </ul>
                   </div>
                </div>
            </div>
        )
    }


}

export default Footer