import React from "react"
import YouTube from 'react-youtube';


class ResourceItem extends React.Component {

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    
    render() {
        const { link } = this.props

        if (link.type === 'video') {

            const opts = {
                height: '202',
                width: '360',
            }

        return (
            <div className="resource-wrapper">
                <YouTube videoId={link.link} opts={opts} onReady={this._onReady}/>
                <h1>{link.title}</h1>
            </div>
        )
        } else {
            return <h1>link</h1>
        }

    }

}


export default ResourceItem