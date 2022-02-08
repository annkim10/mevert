import React from "react"

class ActivityShow extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getactivity(this.props.match.params.activityId)
    }

    render() {
        return(
            this.props.activity
        )
    }

}

export default ActivityShow 