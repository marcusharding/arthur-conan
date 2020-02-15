import React from 'react'
import './timeline_modal.scss'

export class TimelineModal extends React.Component {
    render() {
        return(
            <div style={this.props.modalHider} className="timeline-Modal__container bg-primary m-auto inset-0">
                <div className="close__container">
                    <button onClick={()=>{this.props.modalHandle(); this.props.modalHide()}} className="close"></button>
                </div>
                <div className="wrapper">
                    <h1 className="text-white text-3xl uppercase">The life of Arthur Conan-Doyle</h1>
                    <div className="flex pt-6">
                        <p className="text-white mr-4 text-xl">1882</p>
                        <p className="text-white text-xl">Conan Doyle leaves for portsmouth</p>
                    </div>
                    <div className="">
                    </div>
                </div>
            </div>
        )
    }
}