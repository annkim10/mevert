import React from 'react';
import { Link } from 'react-router-dom'
import { FiMenu } from "react-icons/fi"
import Menu from './menu';
import "./navbar.css"
import logo from "../../assets/mevert_logo.png"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      menu: false
    }
    this.getLinks = this.getLinks.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    if (!this.state.click) {
      this.setState({click: true, menu: true})
    } else {
      this.setState({click: false, menu: false})
    }
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className='navbar-div'>
              <div className='navbar-inner-div'>
                  <div className='logo-div'>
                    <Link to="/"> <img className='logo-img' src={logo} /></Link>
                  </div>
                  <div className='menu-outer-div' onClick={this.handleClick}>
                    <FiMenu />
                    <h1>{this.props.user.firstName} {this.props.user.lastName}</h1>
                    { this.state.menu ? <Menu user={this.props.user} logout={this.props.logout}/> : ""}
                  </div>
              </div>
            </div>
        );}
  }

  render() {
      return (
        <div className='navbar-wrapper'>
            { this.getLinks() }
        </div>
      );
  }
}

export default Navbar;