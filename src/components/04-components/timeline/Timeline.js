import React from 'react'
import Slider from '../../02-teaser/slider/slider'
import './timeline.scss'
import '../../02-teaser/slider/slider.scss'
import { TimelineTracker } from '../../03-objects/timeline_tracker/timelineTracker'
import { TimelineModal } from '../../03-objects/timeline_modal/timeline_modal'
import { Loading } from '../../01-global/loading'

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
    this.slideIndexUpdater = this.slideIndexUpdater.bind(this);
    this.onModalClick = this.onModalClick.bind(this);

    this.state = { trackerMargin: 0, slideIndex: 0, bgBlur: 1, modalActive: false, loading: false }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: true })
      }, 800);
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
          <Loading
            state={this.state.loading}
          />
          <section className='flex flex-col justify-center h-screen overflow-x-hidden'>

          {/** TIMELINE MODAL */}
            <TimelineModal
              modalActive={this.state.modalActive}
              onModalClick={this.onModalClick}
            />
            
          {/** CONTAINER TO BLUR ON MODAL OPEN */}
          <section className="h-full flex flex-col justify-center" style={{...this.state.bgBlur < 0.1 ? modalActive: modalInactive}}>

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
                slides={slideData}
                trackerNextClick={this.trackerNextClick}
                trackerPreviousClick={this.trackerPreviousClick}
                onModalClick={this.onModalClick}
                indexUpdater={this.slideIndexUpdater}
                />
            </div>
          </section>
        </section>
      </React.Fragment>
     );
   }
 }
 