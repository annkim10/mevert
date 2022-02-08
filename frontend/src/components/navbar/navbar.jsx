import React from 'react';
import { Link } from 'react-router-dom'
import "./navbar.css"
import logo from "../../assets/mevert_logo.png"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className='navbar-div'>
              <div className='logo-div'>
                <Link to="/"> <img className='logo-img' src={logo} /></Link>
              </div>
                {/* <Link to={'/profile'}>Profile</Link> */}
              <div className='nav-links-div'>
                  <p>{this.props.user.firstName} {this.props.user.lastName}</p>
                  <div className="logout-button" onClick={this.logoutUser}>LOGOUT</div>
              </div>
               
            </div>
        );
      } else {
        return (
            <div className='navbar-div'>
              <div className='logo-div'>
                  <Link to="/"> <img className='logo-img' src={logo} /></Link>
              </div>
              <div className='nav-links-div'>
                <button className="nav-links" onClick={() => this.props.openModal('signup')}>SIGN UP</button>
                <button className="nav-links" onClick={() => this.props.openModal('login')}>LOG IN</button>
                {/* <Link className='nav-links' to={'/signup'}>SIGN UP</Link>
                <Link  className='nav-links' to={'/login'}>LOG IN</Link> */}
              </div>
            </div>
        );
      }
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