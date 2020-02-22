import React from 'react';
import Slider from '../../02-teaser/Slider';
import './timeline.scss';
import './slider.scss';
import { TimelineTracker } from '../../03-objects/timeline_tracker/timelineTracker';
import { TimelineModal } from '../../03-objects/timeline_modal/timeline_modal';

const slideData = [
    {
      index: 0,
      date: '1882',
      headline: 'Conan Doyle leaves for Portsmouth',
      src: 'https://picsum.photos/seed/picsum/1600/1600'
    },
    {
      index: 1,
      date: '1883',
      headline: 'In The Wilderness',
      src: 'https://picsum.photos/seed/picsum/1600/1600'
    },
    {
      index: 2,
      date: '1884',
      headline: 'For Your Current Mood',
      src: 'https://picsum.photos/seed/picsum/1600/1600'
    },
    {
      index: 3,
      date: '1885',
      headline: 'Focus On The Writing',
      src: 'https://picsum.photos/seed/picsum/1600/1600'
    },
    {
      index: 4,
      date: '1884',
      headline: 'For Your Current Mood',
      src: 'https://picsum.photos/seed/picsum/1600/1600'
    },
    {
      index: 5,
      date: '1885',
      headline: 'Focus On The Writing',
      src: 'https://picsum.photos/seed/picsum/1600/1600'
    },
    {
      index: 6,
      date: '1885',
      headline: 'Focus On The Writing',
      src: 'https://picsum.photos/seed/picsum/1600/1600'
    }
  ]


  // Getting length of tracker by dividing 100 by number of slides
  const trackerLength = 100 / slideData.length



export class Timeline extends React.Component {
  constructor(props) {
    super(props);

    this.trackerNextClick = this.trackerNextClick.bind(this);
    this.trackerPreviousClick = this.trackerPreviousClick.bind(this);
    this.modalHandle = this.modalHandle.bind(this);
    this.modalHide = this.modalHide.bind(this);
    this.slideIndexUpdater = this.slideIndexUpdater.bind(this);

    this.state = { trackerMargin: 0, slideIndex: 0, modalBlur: 1, modalHide: 'none'}
  }

  slideIndexUpdater = (current) => {

    this.setState({ slideIndex: current })
    console.log(current)
  }

  // Function to control the margin of the tracker on each next button click
  trackerNextClick = () => {
    this.setState({ trackerMargin: this.state.trackerMargin + trackerLength })
    if(this.state.trackerMargin > 100 - trackerLength * 2) {
      this.setState({trackerMargin: 0})
    }
  }

  // Function to control the margin of the tracker on the previous button click
  trackerPreviousClick = () => {
    this.setState({ trackerMargin: this.state.trackerMargin - trackerLength })
    if(this.state.trackerMargin < Math.round(trackerLength)) {
      this.setState({trackerMargin: 100 - trackerLength})
    } 
  }

  // Toggle hiding and showing the modal on click
  modalHide = () => {
    this.setState({modalHide: this.state.modalHide === 'none' ? this.setState.modalHide ='block': this.setState.modalHide = 'none'})
  }
  //  Toggle the opacity of the body beneath the modal onClick
  modalHandle = () => {
    this.setState({modalBlur: this.state.modalBlur === 1 ? this.state.modalBlur - 0.9: this.state.modalBlur + 0.9})
  }

   render() {

    // Setting opacity for modalBlur state to control when modal is opened and closed
    const modalContainer = {
      opacity: this.state.modalBlur,
    }

    const blur = {
      filter: `blur(10px)`
    }

    const noBlur = {
      filter: `blur(0px)`
    }

    const modalHider = {
      display: this.state.modalHide,
    }

     return (
        <React.Fragment>
          <section className="flex flex-col justify-center h-screen overflow-x-hidden">

          {/** TIMELINE MODAL */}
          <TimelineModal
            modalHider={modalHider}
            modalHide={this.modalHide}
            modalHandle={this.modalHandle}
            slides={slideData}
          />

          {/** CREATING A CONTAINER TO BLUR ON MODAL OPEN */}
          <div className="h-full" style={{...modalContainer, ...this.state.modalBlur < 0.1 ? blur: noBlur}}>

            <div className="w-11/12 mx-auto py-6">
                <p className="text-white text-3xl">Timeline</p>
            </div>
            <div className="w-11/12 mx-auto">
              <TimelineTracker
                trackerLength={trackerLength}
                trackerMargin={this.state.trackerMargin}
              />
            </div>
            <div className="w-11/12 mx-auto">
                <Slider
                heading="Example Slider"
                slides={slideData}
                trackerNextClick={this.trackerNextClick}
                trackerPreviousClick={this.trackerPreviousClick}
                modalHandle={this.modalHandle}
                modalHide={this.modalHide}
                indexUpdater={this.slideIndexUpdater}
                />
            </div>

          </div>
        </section>
      </React.Fragment>
     );
   }
 }
 