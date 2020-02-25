import React from 'react'
import './timeline_modal.scss'

const src = 'https://picsum.photos/seed/picsum/1600/1600'

export class TimelineModal extends React.Component {
    render() {

        return(
            <div style={this.props.modalHider} className="timeline-Modal__container bg-white">
                <div className="close__container">
                    <button onClick={()=>{this.props.modalHandle(); this.props.modalHide()}} className="close"></button>
                </div>
                <div className="responsive-img aspect-ratio">
                    <img alt="" src={src} ></img>
                </div>
                <div className="wrapper">
                    <h1 className="text-offBlack text-xl font-semibold pt-4">Conan Doyle leaves for portsmouth</h1>
                    <p className="text-offBlack text-3xl uppercase font-bold pb-4">1882</p>
                    <hr></hr>
                    <p className="text-offBlack text-xl py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla libero massa, commodo in suscipit quis, semper id erat. Duis vehicula, lacus vestibulum sagittis dictum, libero orci ornare dui, sit amet hendrerit mi nulla vitae ex</p>
                </div>
            </div>
        )
    }
}