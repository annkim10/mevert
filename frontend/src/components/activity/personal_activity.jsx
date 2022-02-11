import ActivityIndexItem from "./activity_index_item"
import "./activity.css"
import {Link} from "react-router-dom"
import React from "react"

class PersonalActivity extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getactivities()
    }

    render() {
        console.log(this.props.activities)
        const { activities } = this.props
        // const { intro, extro }  = this.props.location.state
        if (!activities.length ) return null
       
        let introActivities = activities.filter(activity => activity.category === 'introvert')
        let extroActivities = activities.filter(activity => activity.category === 'extrovert')

        let introscore = this.props.quiz.filter(score => score === "1").length/10
        let extroscore = this.props.quiz.filter(score => score === "0").length/10
        let iactnum = Math.round(6*introscore)
        let eactnum = 6 - iactnum
        let actindex = []
        let inumarray = []
        let enumarray = []
        while (actindex.length < iactnum) {
            let num = Math.random() * 6 
            num = Math.floor(num)
            if (inumarray.includes(num)) {
                continue
            } else {
                inumarray.push(num)
            }
            actindex.push(introActivities[num])
        }
        while (actindex.length < 6 ) {
            let num = Math.random() * 6 
            num = Math.floor(num)
            if (enumarray.includes(num)) {
                continue
            } else {
                enumarray.push(num)
            }
            actindex.push(extroActivities[num])
        }
        // console.log(introActivities)
        // console.log(introActivities)
        // console.log(extroActivities)
        console.log(actindex)
        return(
            <div className="activities-user-outer-div">
                <h1>Your Curated Activities</h1>
                <div className="card-div">
                        {actindex.map(activity => <ActivityIndexItem activity={activity} />)}
                </div>
                <Link id="personalactivitieslink" to={"/activities"}>View more Activities</Link>
            </div>
        )
    }
}

export default PersonalActivity