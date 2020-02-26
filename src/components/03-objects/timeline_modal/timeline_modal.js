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
                <div className="p-4">
                    <h1 className="text-offBlack lg:text-xl font-semibold lg:pb-2">Conan Doyle leaves for portsmouth</h1>
                    <p className="text-offBlack lg:text-3xl uppercase font-bold lg:pb-2">1882</p>
                    <hr className="lg:pb-2"></hr>
                    <p className="text-offBlack lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla libero massa, commodo in suscipit quis, semper id erat. Duis vehicula, lacus vestibulum sagittis dictum, libero orci ornare dui, sit amet hendrerit mi nulla vitae ex</p>
                </div>
            </div>
        )
    }
}