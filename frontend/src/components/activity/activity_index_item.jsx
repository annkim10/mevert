import React from "react"
import "./activity.css"
import Images from "./activity_images"
import { Link } from "react-router-dom"


const ActivityIndexItem = ({activity}) => {

    return (
        <div className="card-wrapper">
            <Link to={`/activities/${activity._id}`}>
                <div className="card-body">
                    <img src={Images[activity.title]} className="activity-card-img"/>
                    <div className="activity-card-text">
                        <h1 className="activity-card-name">{activity.title}</h1>
                        <ul className="activity-description">
                            <li className="activity-type">{activity.type}</li>
                        </ul>
                    </div>
                </div>
            </Link>
        </div>
            
    )

}

export default ActivityIndexItem