import React from 'react'
import './timeline_modal.scss'
import './modal_arrows.scss'
import LazyLoad from 'react-lazyload'

export class TimelineModal extends React.Component {

    render() {
        return(
            <React.Fragment>

                {/* display these modal controls for key dates at Arthurs house when all below conditions are met  */}
                {this.props.slides.arthursHouse === true && this.props.modalActive === true && this.props.slides.index === this.props.current && this.props.URL === 'map' && (
                    <div className="absolute w-1/3 h-full z-50 left-0 text-white items-center flex-col justify-center text-center hidden lg:flex">
                        <p className="text-3xl pb-4">{this.props.slides.location}</p>
                        <p className="w-1/2 text-lg">{this.props.slides.caption}</p>
                        <div className="counter">
                            <p className="pr-2">{this.props.counterIndex}</p>
                            <p className="pr-2">/</p>
                            <p>5</p>
                        </div>
                    </div>
                )}

                {/* display modal when all below conditions are met  */}
                
                {this.props.modalActive === true && this.props.slides.index === this.props.current && (
                    <div data-key={this.props.slides.index} className={`timeline-Modal__container bg-white ${this.props.modalActive === true ? 'rodal-zoom-enter animation-300' : 'rodal-zoom-leave animation-300'}`}>

                        <React.Fragment>
                        {this.props.slides.arthursHouse === true && this.props.URL === 'map' && (
                            <div className="hidden lg:block">
                                <button onClick={() => {this.props.modalPrevious(this.props.slides);}} className="modal-btn--previous flex"><svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M198.608 246.104L382.664 62.04c5.068-5.056 7.856-11.816 7.856-19.024 0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476 2.792 354.712 0 347.504 0s-13.964 2.792-19.028 7.864L109.328 227.008c-5.084 5.08-7.868 11.868-7.848 19.084-.02 7.248 2.76 14.028 7.848 19.112l218.944 218.932c5.064 5.072 11.82 7.864 19.032 7.864 7.208 0 13.964-2.792 19.032-7.864l16.124-16.12c10.492-10.492 10.492-27.572 0-38.06L198.608 246.104z"/></svg></button>
                                <button onClick={() => {this.props.modalNext(this.props.slides);}} className="modal-btn--next flex"><svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.004 492.004"><path d="M382.678 226.804L163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"/></svg></button>
                            </div>
                        )}
                        </React.Fragment>
                            
                        <div className="close__container">
                            <button onClick={this.props.onModalClick} className="close"></button>
                        </div>
                        <div className="responsive-img aspect-ratio timeline-Modal__img-container">
                            <LazyLoad>
                                <img alt={this.props.slides.headline} src={this.props.slides.src} ></img>
                            </LazyLoad>
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
                )}

            </React.Fragment>
        )
    }
}