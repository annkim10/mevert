import React from "react"
import Images from "./activity_images"
import { Link } from "react-router-dom"
import { BiCategory } from "react-icons/bi"
import { FiInfo } from "react-icons/fi"
import { MdAdd, MdClose, MdOutlinePostAdd } from "react-icons/md"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import ResourceItem from "./activity_resource_item"
import Map from "../map/map"
import {BsLightningChargeFill} from "react-icons/bs"

class ActivityShow extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            addedActivity: false,
            errors: {}
        }
    }

    componentDidMount() {
        window.scroll(0,0)
        this.props.getactivity(this.props.match.params.activityId)
        this.props.allreviews()
        this.props.getUserActivities(this.props.currentUser.id)
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.errors !== prevState.errors){
        return { errors: nextProps.errors };
        }
        else return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.errors !== this.props.errors){
        this.setState({errors: prevProps.errors});
        }
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    renderAddedPopup() {
        if (this.state.addedActivity && this.state.errors.length === 0) {
                return (
                <div className="activity-add-modal">
                    <div onClick={() => this.setState({addedActivity: false})}><MdClose className="close-button" /></div>
                    <div className="add-modal-copy-div">
                        <MdOutlinePostAdd className="add-modal-icon"/>
                        <h1 className="add-modal-text">Activity added</h1>
                    </div>
                    <Link className="add-modal-button" to={`/users/${this.props.currentUser.id}/activities`}>SEE MY ACTIVITIES</Link>
                </div>
            )
        } else if (this.state.addedActivity && this.state.errors.length !== 0) {
            return (
                <div className="activity-add-modal">
                    <div onClick={() => this.setState({addedActivity: false})}><MdClose className="close-button" /></div>
                    <div className="add-modal-copy-div">
                        <AiOutlineExclamationCircle className="add-modal-icon"/>
                        <h1 className="add-modal-text-err">{this.state.errors}</h1>
                    </div>
                    <Link className="add-modal-button" to={`/users/${this.props.currentUser.id}/activities`}>SEE MY ACTIVITIES</Link>
                </div>
            )
        } else {
            return null
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        const activityData = {activityId: this.props.match.params.activityId}
        this.props.postUserActivity(this.props.currentUser.id, activityData).then(this.setState({addedActivity: true}))
    }

    render() {

        const { activity } = this.props
        if (!activity) return null

        let ratings = 0
        let quantity = 0 
        if (this.props.reviews.length) {
            this.props.reviews.forEach(review => {
                if (review.activity === this.props.currentactivity) {
                    ratings += review.ratings 
                    quantity += 1
                }
            })
        }
        let average = 0 
        if (ratings && quantity) {
            average = ratings/quantity
        }
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
                                <h2 className="activity-type"><span><BiCategory className="activity-icon" /></span> Type</h2>
                                <p>{activity.type}</p>
                                <div id="reviewdisplay">
                                {[...Array(5)].map((star,i) => {
                                    const ratingValue = i + 1
                                    return(
                                        <label id="lightradio" key={i}>
                                            <input id="lighteningradioinput" type="radio" value={ratingValue}/>
                                            <BsLightningChargeFill color={ratingValue <= average ? "#89D99D" : "#e4e5e9"} id="lighteningratinginreview" size={20}/>
                                        </label>
                                )})}
                                </div>
                            </div>
                            <div className="activity-show-accessibility">
                                <h2 className="activity-accessibility"><span><FiInfo className="activity-icon"/></span> Accessibility</h2>
                                <p>{activity.accessibility}</p>
                            </div>
                            {this.renderAddedPopup()}
                            <button className="add-activity-button" onClick={this.handleSubmit}><MdAdd className="activity-icon-add" />ADD TO MY PLAN</button>
                        </div>
                    </div>
                </div>
                <div className="activity-show-resources-div">
                    <h1 className="resources-list-header">Resources</h1>
                    <div className="resources-list-div">
                            {activity.link.map((link, idx) => <ResourceItem key={idx} link={link} />)}
                    </div>
                </div>
                 <div className="resources-map-div">
                        <Map data={activity.map_data}/>
                    </div>

            </div>
        )
    }

}

export default ActivityShow
