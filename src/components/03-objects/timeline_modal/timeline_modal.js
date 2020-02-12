import React from 'react'
import './timeline_modal.scss'

export class TimelineModal extends React.Component {
    render() {
        return(
            <div style={this.props.modalHider} className="timeline-Modal__container m-auto inset-0">
                <button onClick={()=>{this.props.modalHandle(); this.props.modalHide()}} className="text-black">close</button>

            </div>
        )
    }
}