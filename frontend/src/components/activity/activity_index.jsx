import React from "react"
import ActivityIndexItem from "./activity_index_item"
import "./activity.css"

class ActivityIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
       window.scroll(0,0)
       this.props.fetchActivities()
    }

    filterActivities(activities, intro, extro) {
        let introActivities = activities.filter(activity => activity.category === 'introvert')
        let extroActivities = activities.filter(activity => activity.category === 'extrovert')

        let introCount = (intro / 100) * 10
        let extroCount = (10 - introCount)
        let filteredActivities = []

        introActivities = introActivities.slice(0, introCount)
        filteredActivities.concat(introActivities)
        return filteredActivities
    }

    render() {

        const { activities } = this.props
        // const { intro, extro }  = this.props.location.state
        if (!activities ) return null
        return(
            <div className="activities-user-outer-div">
                <h1>All Activities</h1>
                <div className="card-div">
                        {activities.map((activity, idx) => <ActivityIndexItem key={idx} activity={activity} />)}
                </div>
            </div>
        )
    }
}

export default ActivityIndex