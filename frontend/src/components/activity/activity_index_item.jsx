import React from "react"



const ActivityIndexItem = ({activity}) => {

    return (
        <div>
            <div className="card-body">
                {/* <img src={} className="pup-card-img"/> */}
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