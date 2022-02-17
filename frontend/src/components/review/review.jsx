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
        .then(() => {
            if (!Object.values(this.props.errors).length) {
                this.props.activity.reviews.push(Object.values(this.props.createdreview)[0]._id)
                this.props.updateActivity(this.props.activity)
                this.props.history.push(`/users/${this.props.user}/activities`)
            }
        })
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    componentDidMount() {
        this.props.getactivity(this.props.match.params.activityId)
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }


    render() {
        return(
            <div id="outterreviewpagediv">
                <h1 id="reviewheader">New Diary Entry</h1>
                {/* {this.rendererrors} */}
                <form id="reviewformouter" onSubmit={this.handleSubmit}>
                    
                    <label id="reviewratingdiv"  >How did this activity make you feel?
                    <div id="lightradio">
                    {[...Array(5)].map((star,i) => {
                        const ratingValue = i + 1
                        return(
                        <label id="lightradio" key={i}>
                            <input id="lighteningradioinput" type="radio" value={ratingValue} onChange={this.update("ratings")}/>
                            <BsLightningChargeFill color={ratingValue <= this.state.ratings ? "#89D99D" : "#e4e5e9"} id={this.props.errors.ratings ? "errorlightening" :"lighteningratinginreview"} size={35}/>
                        </label>
                    )})}
                    </div>
                    <div>
                    {this.props.errors.ratings ? (
                        <p id="error">{this.props.errors.ratings}</p>
                    ) : (
                        null
                    )}
                    </div>
                    </label>
                
                    <label id="reviewtitleentry">Diary Entry Title
                        <input id={this.props.errors.title ? "errortitle" : "reviewtitleinput"} type="text" value={this.state.title} placeholder="What was the most important takeaway from this activity?" onChange={this.update("title")}/>
                        <div>
                        {this.props.errors.title ? (
                            <p id="error">{this.props.errors.title}</p>
                         ) : (
                            null
                        )}
                        </div>
                    </label>
                    <label id="reviewbodyentry">Diary Entry
                        <textarea id={this.props.errors.body ? "errorbody" :"reviewbodyinput"} type="text" value={this.state.body} placeholder="What did you like and dislike about this activity? Would you want to do again? Write down all your thoughts" onChange={this.update("body")}/>
                        <div>
                        {this.props.errors.body ? (
                            <p id="error">{this.props.errors.body}</p>
                         ) : (
                            null
                        )}
                        </div>
                    </label>
                    <input id="reviewsubmit" type="submit" value="Submit Review"/>        
                </form>
            </div>
        )
    }
}

export default Review