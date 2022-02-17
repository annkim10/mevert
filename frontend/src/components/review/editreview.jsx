import React from "react"
import {BsLightningChargeFill} from "react-icons/bs"
import "./review.css"

class EditReview extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            ratings: this.props.review.ratings,
            title: this.props.review.title,
            body: this.props.review.body,
            activity: this.props.match.params.activityId,
            id: this.props.match.params.reviewId
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.processReview(this.state)
        .then(() => this.props.history.push(`/users/${this.props.user}/activities`)) 

    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    componentDidMount() {
        window.scroll(0,0)
        this.props.fetchreview(this.props.match.params.reviewId)
        this.props.getactivity(this.props.match.params.activityId)
    }


    render() {
        console.log(this.props)
        if (!Object.values(this.props.review).length) return null
        
        return(
            <div id="outterreviewpagediv">
                <h1 id="reviewheader">Edit Diary Entry</h1>
                <form id="reviewformouter" onSubmit={this.handleSubmit}>
                    
                    <label id="reviewratingdiv"  >How did this activity make you feel?
                    <div id="lightradio">
                    {[...Array(5)].map((star,i) => {
                        const ratingValue = i + 1
                        return(
                            <label id="lightradio" key={i}>
                            <input id="lighteningradioinput" type="radio" value={ratingValue} onChange={this.update("ratings")}/>
                            <BsLightningChargeFill color={ratingValue <= this.state.ratings ? "#89D99D" : "#e4e5e9"} id="lighteningratinginreview" size={35}/>
                        </label>
                    )})}
                    </div>
                    </label>
                
                    <label id="reviewtitleentry">Diary Entry Title
                        <input id="reviewtitleinput" type="text" value={this.state.title} placeholder="What was the most important takeaway from this activity?" onChange={this.update("title")}/>
                    </label>
                    <label id="reviewbodyentry">Diary Entry
                        <textarea id="reviewbodyinput" type="text" value={this.state.body} placeholder="What did you like and dislike about this activity? Would you want to do again? Write down all your thoughts" onChange={this.update("body")}/>
                    </label>
                    <div className="edit-review-button-div">
                        <input id="reviewsubmit" type="submit" value={this.props.form}/>     
                        <button id="reviewsubmit" onClick={() => this.props.history.push(`/users/${this.props.user}/activities`)}>CANCEL</button>   
                    </div>
                </form>
            </div>
        )
    }
}

export default EditReview