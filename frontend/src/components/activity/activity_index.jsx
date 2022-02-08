import React from "react"
import ActivityIndexItem from "./activity_index_item"

class ActivityIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
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
        console.log("props", this.props)

        const { activities } = this.props
        // const { intro, extro }  = this.props.location.state
        if (!activities ) return null
       
        // console.log("filter", this.filterActivities(activities, intro, extro))
        return(
            <div className="activities-user-outer-div">
                <h1>Activities for me</h1>
                {activities.map(activity => <ActivityIndexItem activity={activity} />)}
            </div>
        )
    }
}

export default ActivityIndex