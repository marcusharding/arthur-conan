// import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import TimelineTeaser from './02-teaser/TimelineTeaser';
// import Button from './03-objects/Button';


// class Timeline extends React.Component {
//    render() {
//      const slides = [
//         {
//          img: 'https://picsum.photos/seed/picsum/1600/1600',
//          date: '1882',
//          subHeading: 'Lorem ipsum dolor sit amet'

//         },
//         {
//          img: 'https://picsum.photos/seed/picsum/1600/1600',
//          date: '1882',
//          subHeading: 'Lorem ipsum dolor sit amet'
//         },
//         {
//           img: 'https://picsum.photos/seed/picsum/1600/1600',
//           date: '1882',
//           subHeading: 'Lorem ipsum dolor sit amet'
//          },
//         {
//           img: 'https://picsum.photos/seed/picsum/1600/1600',
//           date: '1882',
//           subHeading: 'Lorem ipsum dolor sit amet'
//          },
//         {
//           img: 'https://picsum.photos/seed/picsum/1600/1600',
//           date: '1882',
//           subHeading: 'Lorem ipsum dolor sit amet'
//          },
//         {
//           img: 'https://picsum.photos/seed/picsum/1600/1600',
//           date: '1882',
//           subHeading: 'Lorem ipsum dolor sit amet'
//          },
//       ];
//      var settings = {
//        dots: true,
//        infinite: false,
//        centerMode: true,
//        centerPadding: '20%',
//        speed: 500,
//        slidesToShow: 1,
//        slidesToScroll: 1,
//        arrows: false
//      };
//      return (
//       <section className="pb-12 h-screen">
//         <div className="wrapper">
//           <p className="text-white text-3xl py-12">Timeline</p>
//         </div>
//         <div className="">
//           <Slider {...settings}>
//               {slides.map((props) => {
//                 return (
//                     <div className="pr-12">
//                       <TimelineTeaser
//                         img={props.img}
//                         date={props.date}
//                         subHeading={props.subHeading}
//                         />
//                     </div>
//                 )
//               })}
//           </Slider>
//         </div>
//         <div className="wrapper text-center py-12">
//           <Button
//             btnText={'Go Back'}
//            />
//         </div>
//       </section>
//      );
//    }
//  }
 
// export default Timeline;