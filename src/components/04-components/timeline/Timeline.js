import React from 'react';
import Slider from '../../02-teaser/Slider';
import './timeline.scss';
import './slider.scss';
import { TimelineTracker } from '../../03-objects/timeline_tracker/timelineTracker'

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

    this.state = { trackerMargin: 0}
  }

  

  trackerNextClick = () => {
    this.setState({ trackerMargin: this.state.trackerMargin + trackerLength })
    if(this.state.trackerMargin > 100 - trackerLength * 2) {
      this.setState({trackerMargin: 0})
    }
  }

  trackerPreviousClick = () => {
    this.setState({ trackerMargin: this.state.trackerMargin - trackerLength })
    if(this.state.trackerMargin < Math.round(trackerLength)) {
      this.setState({trackerMargin: 100 - trackerLength})
    } 
  }

   render() {
     console.log(this.state.trackerMargin)
     console.log(100 / slideData.length)
     return (
        <React.Fragment>
          <section className="flex flex-col justify-center h-screen lg:h-auto overflow-x-hidden">
            <div className="w-11/12 mx-auto py-12">
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
                />
            </div>
            <div className="wrapper text-center pt-20 relative">
          </div>
        </section>
      </React.Fragment>
     );
   }
 }
 