import React from "react"
import "./activity.css"
import Images from "./activity_images"


const ActivityIndexItem = ({activity}) => {

    return (
        <div className="card-wrapper">
           <div className="card-body">
                <img src={Images[activity.title]} className="pup-card-img"/>
                <div className="pup-card-text">
                    <h1 className="pup-card-name">{activity.title}</h1>
                    <ul className="pup-card-description">
                        <li className="pup-card-age">{activity.type}</li>
                        <li className="pup-card-breed">{activity.category}</li>
                    </ul>
                </div>
            </div>
        </div>
            
    )

}

export default ActivityIndexItem