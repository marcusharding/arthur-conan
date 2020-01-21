import React from 'react';
import Button from './03-objects/Button';
import Slider from './02-teaser/Slider';

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




class Timeline extends React.Component {

   render() {
     
     return (
        <React.Fragment>
            <section className="h-auto overflow-x-hidden">
                <div className="wrapper">
                    <p className="text-white text-3xl py-4">Timeline</p>
                </div>
            <div className="">
                <Slider
                heading="Example Slider"
                slides={slideData}
                />
            </div>
            <div className="wrapper text-center pt-20 relative">
                <Button
                    btnText={'Go Back'}
                />
            </div>
        </section>
      </React.Fragment>
     );
   }
 }
 
export default Timeline;