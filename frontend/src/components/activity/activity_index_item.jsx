import React from "react"
import "./activity.css"
import Images from "./activity_images"


const ActivityIndexItem = ({activity}) => {

    return (
        <div className="card-wrapper">
           <div className="card-body">
                <img src={Images[activity.title]} className="activity-card-img"/>
                <div className="activity-card-text">
                    <h1 className="activity-card-name">{activity.title}</h1>
                    <ul className="activity-description">
                        <li className="activity-type">{activity.type}</li>
                    </ul>
                </div>
            </div>
        </div>
            
    )

}

export default ActivityIndexItem