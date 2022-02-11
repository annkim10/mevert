import React from "react"
import {BsLightningChargeFill} from "react-icons/bs"
import "./review.css"

class Review extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.review
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.processReview(this.state)
        .then(() => this.props.activity.reviews.push(Object.values(this.props.createdreview)[0]._id))
        .then(() => this.props.updateActivity(this.props.activity))
        .then(() => this.props.history.push(`/users/${this.props.user}/activities`)) 
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    componentDidMount() {
        this.props.getactivity(this.props.match.params.activityId)
    }


    render() {
        return(
            <div id="outterreviewpagediv">
                <h1 id="reviewheader">New Diary Entry</h1>
                <form id="reviewformouter" onSubmit={this.handleSubmit}>
                    
                    <label id="reviewratingdiv"  >How did this activity make you feel?
                    <div id="lightradio">
                    {[...Array(5)].map((star,i) => {
                        const ratingValue = i + 1
                        return(
                        <label id="lightradio" key={i}>
                            <input id="lighteningradioinput" type="radio" value={ratingValue} onChange={this.update("ratings")}/>
                            <BsLightningChargeFill color={ratingValue <= this.state.ratings ? "#4eeb1e" : "#e4e5e9"} id="lighteningratinginreview" size={35}/>
                        </label>
                    )})}
                    </div>
                    </label>
                
                    <label id="reviewtitleentry">Diary Entry Title
                        <input id="reviewtitleinput" type="text" value={this.state.title} placeholder="What was the most important takeaway from this activity?" onChange={this.update("title")}/>
                    </label>
                    <label id="reviewbodyentry">Diary Entry
                        <input id="reviewbodyinput" type="text" value={this.state.body} placeholder="What did you like and dislike about this activity? Would you want to do again? Write down all your thoughts" onChange={this.update("body")}/>
                    </label>
                    <input id="reviewsubmit" type="submit" value="Submit Review"/>        
                </form>
            </div>
        )
    }
}

export default Review