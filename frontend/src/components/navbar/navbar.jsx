import React from 'react';
import { Link } from 'react-router-dom'
import { FiMenu } from "react-icons/fi"
import "./navbar.css"
import logo from "../../assets/mevert_logo.png"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      menu: false
    }
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  logoutUser(e) {
      console.log("inside logout", this.props)
      e.preventDefault();
      this.props.logout();
      this.props.history.push("/");
  }

  handleClick(e) {
    e.preventDefault()
    if (!this.state.click) {
      this.setState({click: true, menu: true})
    } else {
      this.setState({click: false, menu: false})
    }
  }

  showMenu() {
    if (this.state.menu) {
      return (
      <div className='menu-wrapper'>
        <ul className='menu-list'>
          <li><Link className="user-button" to={`/users/${this.props.user.id}`}>
                MY CALENDAR</Link></li>
          <li><Link className="user-button" to={`/users/${this.props.user.id}/activities`}>
                MY ACTIVITIES</Link></li>
          <li><Link className='user-button' to="/activities">EXPLORE ACTIVITIES</Link></li>
          <li><Link className='user-button' to="/quiz">TAKE QUIZ</Link></li>
        </ul>
      </div>
      )
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
                    {this.showMenu()}
                  </div>
              </div>
            </div>
        );}
  }

  render() {
    console.log("inside navbar", this.state)
      return (
        <div className='navbar-wrapper'>
            { this.getLinks() }
        </div>
      );
  }
}

export default Navbar;