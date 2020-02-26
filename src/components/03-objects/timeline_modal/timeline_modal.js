import React from 'react'
import './timeline_modal.scss'

const src = 'https://picsum.photos/seed/picsum/1600/1600'

export class TimelineModal extends React.Component {
    render() {

        return(
            <div className={`timeline-Modal__container bg-white ${this.props.modalActive === false ? 'hidden' : 'block'}`}>
                <div className="close__container">
                    <button onClick={this.props.onModalClick} className="close"></button>
                </div>
                <div className="responsive-img aspect-ratio">
                    <img alt="" src={src} ></img>
                </div>
                <div className="p-4">
                    <h1 className="text-offBlack lg:text-xl font-semibold lg:pb-2">Arthur Conan-Doyle is born</h1>
                    <p className="text-offBlack lg:text-3xl uppercase font-bold lg:pb-2">1859</p>
                    <hr className="lg:pb-2"></hr>
                    <p className="text-offBlack lg:text-xl">Doyle was born on 22 May 1859 at 11 Picardy Place, Edinburgh, Scotland. His father, Charles Altamont Doyle, was born in England, of Irish Catholic descent, and his mother, Mary (née Foley), was Irish Catholic. His parents married in 1855.</p>
                </div>
            </div>
        )
    }
}