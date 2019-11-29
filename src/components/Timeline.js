import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TimelineTeaser from './02-teaser/TimelineTeaser';
 

class Timeline extends React.Component {
   render() {
     var settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 2,
       slidesToScroll: 2
     };
     return (
       <div className="wrapper h-screen">
        <Slider {...settings}>
          <div>
            <TimelineTeaser />
          </div>
          <div>
            <TimelineTeaser />
          </div>
          <div>
            <TimelineTeaser />
          </div>
          <div>
            <TimelineTeaser />
          </div>
        </Slider>
       </div>
     );
   }
 }
 
export default Timeline;