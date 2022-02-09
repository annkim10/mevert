import React from "react"

class ActivityShow extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.getactivity(this.props.match.params.activityId)
    }

    render() {
        console.log("inside show", this.props)
        return(
            <div>
                <h1>activity show</h1>
            </div>
        )
    }

}

export default ActivityShow 