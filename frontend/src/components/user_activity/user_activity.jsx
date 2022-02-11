import React from "react"
import Images from "../activity/activity_images"
import {BiDollar} from "react-icons/bi"
import {Link} from "react-router-dom"
import "./user_activity.css"
import {BsLightningChargeFill} from "react-icons/bs"

class UserActivity extends React.Component {

    constructor(props) {
        super(props)
        this.removereview = this.removereview.bind(this)
    }

    componentDidMount() {
        this.props.allactivities()
        this.props.allreview()
    }

    activityfinder(review) {
        let name 
        this.props.activities.forEach(act => {
            if (act._id === review.activity) name = act.title 
        })
        return name
    }

    removereview(e) {
        e.preventDefault()
        console.log("hello")
        this.props.deletereview(e.currentTarget.value)
    }

    activitydate(date) {
        let newdate = new Date(date)
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let year = newdate.getFullYear()
        let month = newdate.getMonth()
        let day = newdate.getDate()
        let nday = newdate.getDay()
        let currentmonth = months[month]
        let currentday = days[nday] 
        let fulldate = `${currentday} ${currentmonth} ${day}, ${year}`
        return fulldate
    }

    render() {
        if (!this.props.activities.length) return null
        let narray = []
        this.props.activities.forEach(act => {
            if (this.props.user.activities.includes(act._id)) narray.push(act)
        })
        let rarray = []
        this.props.reviews.forEach(review => {
            if (review.user === this.props.user.id) rarray.push(review)
        })
        console.log(this.props.reviews)
        return(
            <div>
                <h1 id="UserWelcome">Welcome to your Planning Page {this.props.user.firstName}</h1>
                <div id="useractivityactivityandreviews">
                    <div id="useractdiv">
                    <p id="selectedactivities">Selected Activities</p>
                    <div id="activitiesdisplayinuseractivities">
                    {narray.map((act,i) => (
                        <div id="individualactivityuseractivity" key={i}>
                            <img id="useractivityimg" src={Images[act.title]}/>
                            <span id="acttitle">{act.title}</span>
                            <span id="acttype">{act.type}</span>
                            <div id="pricediv">
                            <span>Price: </span>
                                {[...Array(act.price)].map((price,i) => (
                                    < BiDollar id="dollarsign"key={i}/>
                                ))}
                            </div>
                            <Link id="calenderlink" to={`/users/${this.props.user.id}`}>Schedule this Event</Link>
                            <Link id="reviewlink" to={`/activities/${act._id}/review`}>Create a Review</Link>
                        </div>
                    ))}
                     </div>
                    </div>
                    <div id="reviewdivuseractivities">
                        <p id="reviewactivities">Reviews</p>
                        <div id="overflowreview">
                        {rarray.map((review,i) => (
                            <div key={i} id="innerreviewdivuseractivities">
                                <span id="reviewdate">Date: {this.activitydate(review.date)}</span>
                                <span id="reviewactivity">Activity: {this.activityfinder(review)}</span>
                                <div id="hline"></div>
                                <span id="reviewentrytitle">Entry #{i+1}</span>
                                <div id="reviewstaruseractivity">
                                {[...Array(5)].map((star,i) => {
                                    const ratingValue = i + 1
                                    return(
                                        <label key={i}>
                                            <BsLightningChargeFill color={ratingValue <= review.ratings ? "#4eeb1e" : "#e4e5e9"} size={25}/>
                                        </label>
                                    )})}
                                </div>
                                <span id="reviewtitleuseractivity">{review.title}</span>
                                <span id="reviewbodyuseractivity">{review.body}</span>
                                <Link id="linktoeditreview" to={`/activities/${review.activity}/review/${review._id}`}>Edit</Link>
                                <button id="buttontodelete" value={review._id} onClick={this.removereview}>Delete</button>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default UserActivity