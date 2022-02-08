import React from "react"


class ActivityIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchActivities().filter(ele => ele.category === "introvert")
    }

    render() {
        return(
            console.log(this.props.activities)
        )
    }
}

export default ActivityIndex