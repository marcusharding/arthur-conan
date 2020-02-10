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
    }
  ]




export class Timeline extends React.Component {

   render() {

      // Grabbing length of marker by dividing 100 by the number of slides contained within slideData
      const slideLength = slideData.length
      const trackerLength = 100 / slideLength
      // Beginning to grab ID for slider controls to create an onclick event listener
      const sliderControl = document.getElementById('sliderControl')
     
     return (
        <React.Fragment>
          <section className="flex flex-col justify-center h-screen lg:h-auto overflow-x-hidden">
            <div className="w-11/12 mx-auto py-12">
                <p className="text-white text-3xl">Timeline</p>
            </div>
            <div className="w-11/12 mx-auto">
              <TimelineTracker
                trackerLength={trackerLength}
              />
            </div>
            <div className="w-11/12 mx-auto">
                <Slider
                heading="Example Slider"
                slides={slideData}
                />
            </div>
            <div className="wrapper text-center pt-20 relative">
          </div>
        </section>
      </React.Fragment>
     );
   }
 }
 