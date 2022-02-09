import React from "react"
import Images from "./activity_images"
import { BiCategory } from "react-icons/bi"
import { FiInfo } from "react-icons/fi"
import ResourceItem from "./activity_resource_item"

class ActivityShow extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.getactivity(this.props.match.params.activityId)
    }

    handleSubmit(e) {
        e.preventDefault()
        const activityData = {activityId: this.props.match.params.activityId}
        this.props.postUserActivity(this.props.currentUser.id, activityData)
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
                            <button onClick={this.handleSubmit}>ADD TO MY PLAN</button>
                        </div>
                    </div>
                </div>
                <div className="activity-show-resources-div">
                    <div className="resources-list-div">
                        <h1 className="resources-list-header">Resources</h1>
                        <div className="resources-list">
                            {activity.link.map((link, idx) => <ResourceItem key={idx} link={link} />)}
                        </div>
                    </div>
                    <div className="resources-map-div">
                        <h1>Map goes here</h1>
                    </div>
                </div>
            </div>
        )
    }

}

export default ActivityShow 
