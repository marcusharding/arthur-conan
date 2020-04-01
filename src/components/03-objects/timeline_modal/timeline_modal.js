import React from 'react'
import './timeline_modal.scss'

// const src = 'https://picsum.photos/seed/picsum/1600/1600'

export class TimelineModal extends React.Component {
    render() {

        return(
            <div className={`timeline-Modal__container bg-white ${this.props.modalActive === false ? 'hidden' :  'block'} ${this.props.slides.index === this.props.current ? 'visible' : 'invisible'}`}>
                <div className="close__container">
                    <button onClick={this.props.onModalClick} className="close"></button>
                </div>
                <div className="responsive-img aspect-ratio timeline-Modal__img-container">
                    <img alt={this.props.slides.headline} src={this.props.slides.src} ></img>
                </div>
                <div className="p-4 timeline-Modal__txt-Container">
                    <h1 className="text-offBlack lg:text-xl font-semibold lg:pb-2">{this.props.slides.headline}</h1>
                    <p className="text-offBlack lg:text-3xl uppercase font-bold lg:pb-2">{this.props.slides.date}</p>
                    <hr className="lg:pb-2"></hr>
                    <p className="text-offBlack lg:text-xl">{this.props.slides.text}</p>
                </div>
            </div>
        )
    }
}