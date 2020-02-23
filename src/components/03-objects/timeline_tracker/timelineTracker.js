import React from 'react'
import './timelineTracker.scss'


export class TimelineTracker extends React.Component {
    render() {

        // Grabbing the set width of the marker based on the amount of slides
        const trackerWidth = {
            width: this.props.trackerLength + '%'
        }
        const trackerMargin = { 
            marginLeft: this.props.trackerMargin + '%'
        }

        return(
            <div className="timelineTracker__container mb-12">
                <div style={{...trackerMargin,...trackerWidth}} className="timelineTracker__marker bg-secondary tracker-transition">

                </div>
            </div>
        )
    }
}