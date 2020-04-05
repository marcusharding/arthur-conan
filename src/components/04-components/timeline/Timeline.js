import React from 'react'
import Slider from '../../02-teaser/slider/slider'
import './timeline.scss'
import '../../02-teaser/slider/slider.scss'
import { TimelineTracker } from '../../03-objects/timeline_tracker/timelineTracker'
import { TimelineModal } from '../../03-objects/timeline_modal/timeline_modal'
import {slideData} from './timelineData'



// Getting length of tracker by dividing 100 by number of slides
const trackerLength = 100 / slideData.length

export class Timeline extends React.Component {
  constructor(props) {
    super(props);

    this.onModalClick = this.onModalClick.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleSlideClick = this.handleSlideClick.bind(this);
    this.handleTrackerNext = this.handleTrackerNext.bind(this);

    this.state = { trackerMargin: 0, current: 0, bgBlur: 1, modalActive: false, loading: false }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: true })
      }, 800);
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  // Previous click function for the slide button 
  handlePreviousClick() {
    const previous = this.state.current - 1
    this.setState({ 
      current: (previous < 0) 
        ? slideData.length - 1
        : previous
    })
  }

  // Next click function for slide button
  handleNextClick() {
    const next = this.state.current + 1;
    this.setState({ 
      current: (next === slideData.length) 
        ? 0
        : next
    })
  }

  // Click function for on the slide
  handleSlideClick(index) {
    if (this.state.current !== index) {
      this.setState({
        current: index
      })
    }
  }

  // Updating timeline tracker on slider increment
  handleTrackerNext = () => {
    this.setState({ 
      trackerMargin: (this.state.current === 0)
      ? this.state.current + trackerLength
      : this.state.trackerMargin + trackerLength
    })
    if(this.state.trackerMargin > 100 - trackerLength * 2) {
      this.setState({trackerMargin: 0})
    }
  }

  // Updating timeline tracker on slider decrement
  handleTrackerPrev = () => {
    this.setState({
      trackerMargin: (this.state.current === 0)
      ? trackerLength * slideData.length - trackerLength
      : this.state.trackerMargin - trackerLength
    })
  }


  // Toggle hiding and showing the modal on click + Bluring the background
  onModalClick = () => {
    this.setState((prevState) => {
      return { modalActive: !prevState.modalActive };
    });
    this.setState({bgBlur: this.state.bgBlur === 1 ? this.state.bgBlur - 0.9: this.state.bgBlur + 0.9});
  }

   render() {

    // Setting two variables to apply some style to blur and fade the background when modal is active / inactive
    const modalActive = {
      filter: `blur(10px)`,
      opacity: this.state.bgBlur
    }
    const modalInactive = {
      filter: `blur(0px)`,
      opacity: this.state.bgBlur
    }

     return (
        <React.Fragment>
          {/* Loading component  */}
          <section className='flex flex-col justify-center h-screen overflow-x-hidden'>

          {slideData.map(slide => {
              return (
                <TimelineModal
                  modalActive={this.state.modalActive}
                  onModalClick={this.onModalClick}
                  slides={slide}
                  key={slide.index}
                  current={this.state.current}
                />
              )
            })}
            
          {/** CONTAINER TO BLUR ON MODAL OPEN */}
          <section className={`h-full flex flex-col justify-center ${this.state.modalActive === true ? 'pointer-events-none' : ''}`} style={{...this.state.bgBlur < 0.1 ? modalActive: modalInactive}}>

            <div className="w-11/12 mx-auto pb-2">
                <p className="text-white text-3xl">Timeline</p>
            </div>
            <div className="w-11/12 mx-auto mb-6">
              <TimelineTracker
                trackerLength={trackerLength}
                trackerMargin={this.state.trackerMargin}
              />
            </div>
            <div className="w-11/12 mx-auto">
                <Slider
                heading="Example Slider"
                current={this.state.current}
                slides={slideData}
                handlePreviousClick={this.handlePreviousClick}
                handleNextClick={this.handleNextClick}
                handleSlideClick={this.handleSlideClick}
                onModalClick={this.onModalClick}
                handleTrackerNext={this.handleTrackerNext}
                handleTrackerPrev={this.handleTrackerPrev}
                appOnLoad={this.props.appOnLoad}
                />
            </div>
          </section>
        </section>
      </React.Fragment>
     );
   }
 }
 