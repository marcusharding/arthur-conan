import React from 'react'
import './timeline_modal.scss'
import backArrow from '../../../assets/svg/previous.svg'
import nextArrow from '../../../assets/svg/next.svg'

export class TimelineModal extends React.Component {
    render() {
        return(
            <React.Fragment>
            <div className="arthurs-house-txt--container">
                <div className={`absolute w-1/3 h-full z-50 left-0 text-white items-center flex-col justify-center text-center ${this.props.slides.arthursHouse === true && this.props.modalActive === true ? 'flex' : 'hidden'} ${this.props.slides.index === this.props.current ? 'visible' : 'invisible'}`}>
                <p className="text-3xl pb-4">{this.props.slides.location}</p>
                <p className="w-1/2 text-lg">{this.props.slides.caption}</p>
                </div>
            </div>
            <div data-key={this.props.slides.index} className={`timeline-Modal__container bg-white ${this.props.modalActive === false ? 'hidden' :  'block'} ${this.props.slides.index === this.props.current ? 'visible' : 'invisible'}`}>
                <div onClick={() => {this.props.modalPrevious(this.props.slides);}} className={`modal-btn--previous ${this.props.slides.arthursHouse === false ? 'hidden' : 'flex'}`}><img alt="" className="text-white w-1/3" src={backArrow} /></div>
                <div onClick={() => {this.props.modalNext(this.props.slides);}} className={`modal-btn--next ${this.props.slides.arthursHouse === false ? 'hidden' : 'flex'}`}><img alt="" className="text-white w-1/3" src={nextArrow} /></div>
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
                    <p className="text-offBlack lg:text-xl pb-2">{this.props.slides.text}</p>
                    <hr className="lg:pb-2"></hr>
                    {this.props.slides.link ? <a alt="" className="text-blue-700 text-lg" href={this.props.slides.link}>Find out more</a> : null}
                </div>
            </div>
            </React.Fragment>
        )
    }
}