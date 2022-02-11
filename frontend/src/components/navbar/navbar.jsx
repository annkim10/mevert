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
      console.log("inside logout", this.props)
      e.preventDefault();
      this.props.logout();
      this.props.history.push("/");
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className='navbar-div'>
              <div className='logo-div'>
                <Link to="/"> <img className='logo-img' src={logo} /></Link>
              </div>
              <div className='nav-links-div'>
                <Link className="user-button" to={`/users/${this.props.user.id}`}>{this.props.user.firstName} {this.props.user.lastName}</Link>
                <div className="user-button" onClick={this.logoutUser}>LOGOUT</div>
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