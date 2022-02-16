import React from "react"
import { Link } from "react-router-dom"


const Menu = ( { user, logout }) => {

    return (
      <div className='menu-wrapper'>
        <ul className='menu-list'>
          <li><Link className="user-button" to={`/users/${user.id}`}>
                MY CALENDAR</Link></li>
          <li><Link className="user-button" to={`/users/${user.id}/activities`}>
                MY ACTIVITIES</Link></li>
          <li><Link className='user-button' to="/activities">EXPLORE ACTIVITIES</Link></li>
          <li><Link className='user-button' to="/quiz">TAKE QUIZ</Link></li>
          <li className='user-button' onClick={logout}>LOG OUT</li>
        </ul>
      </div>
    )

}

export default Menu

