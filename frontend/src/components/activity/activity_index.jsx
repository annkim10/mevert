import React from "react"


class ActivityIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchActivities().filter(ele => ele.category === "introvert")
    }

    render() {
        console.log(this.props.activities)
        return(
            <h1>Test</h1>
        )
    }
}

export default ActivityIndex