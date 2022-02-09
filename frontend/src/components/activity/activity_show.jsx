import React from "react"
import Images from "./activity_images"
import { BiCategory } from "react-icons/bi"
import { FiInfo } from "react-icons/fi"

class ActivityShow extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getactivity(this.props.match.params.activityId)
    }

    render() {
        console.log("inside show", this.props)

        const { activity } = this.props
        if (!activity) return null

        return(
            <div className="activity-show-outer-div">
                <div className="activity-show-main-div">
                    <div className="activity-img-div">
                        <img className="activity-img" src={Images[activity.title]} />
                    </div>
                    <div className="activity-show-description">
                        <h1 className="activity-show-main-header">{activity.title}</h1>
                        <div className="activity-show-description">
                            <div className="activity-show-category">
                                <h1 className="activity-type"><span><BiCategory /></span> Type</h1>
                                <p>{activity.type}</p>
                            </div>
                            <div className="activity-show-accessibility">
                                <h1 className="activity-accessibility"><span><FiInfo /></span> Accessibility</h1>
                                <p>{activity.accessibility}</p>
                            </div>
                            <button>ADD TO MY PLAN</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ActivityShow 