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
                  <img className='logo-img' src={logo} />
              </div>
                {/* <Link to={'/profile'}>Profile</Link> */}
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className='navbar-div'>
              <div className='logo-div'>
                  <img className='logo-img' src={logo} />
              </div>
              <div className='nav-links-div'>
                <Link className='nav-links' to={'/signup'}>SIGN UP</Link>
                <Link  className='nav-links' to={'/login'}>LOG IN</Link>
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