import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Map, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet'
import { TimelineModal } from '../components/03-objects/timeline_modal/timeline_modal'
import {slideData} from '../components/04-components/timeline/timelineData'
import Control from 'react-leaflet-control';


// Filtering two variables one for all main locations and one just or events at arthurs house 
const elmGroveMapData = slideData.filter(data => data.arthursHouse === true)
const mainMapData = slideData.filter(data => data.arthursHouse === false)


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export class PortsmouthMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      id: null,
      loading: false,
      bgBlur: 1, 
      modalActive: false,
      current: null,
      center: [50.801225, -1.0661091],
      arthursHouse: 3,
      elmgroveModifier: false,
      counterIndex: 1,
      ArthursHousePopup: true
    }
    this.userMarker = L.icon({
      iconUrl: require('../assets/images/usermarker.png'),
      iconSize: [20, 20]
    });
    this.popUpMarker = L.icon({
      iconUrl: require('../assets/images/popup-marker.png'),
      iconSize: [35, 35]
    });

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onModalPreviousClick = this.onModalPreviousClick.bind(this);
    this.onModalNextClick = this.onModalNextClick.bind(this);
  }

  componentDidMount() {
    this.getLocation();
    setTimeout(() => {
      this.setState({ loading: true })
    }, 800);
    this.props.setURL(this.props.path);
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.state.id);
  }

  // Function to control marker click and toggle modal display + bg blur
  onMarkerClick = (index) => {
    this.setState((prevState) => {
      return { modalActive: !prevState.modalActive };
    });
    this.setState({bgBlur: this.state.bgBlur === 1 ? this.state.bgBlur - 0.9: this.state.bgBlur + 0.9});

    this.setState({current: index})
  }

  // Controling the modal arrows to change through each key date that took place at Arthurs house in elm grove
  onModalPreviousClick = (slide) => {
    const currentIndex = elmGroveMapData.indexOf(slide)
    const nextIndex = currentIndex === 0 ? 0 : (currentIndex - 1) % elmGroveMapData.length
    const counterIndex = (this.state.counterIndex === 1 ? 1 : this.state.counterIndex - 1)
    
    this.setState({
      arthursHouse: elmGroveMapData[nextIndex].index,
      current: elmGroveMapData[nextIndex].index,
      counterIndex: counterIndex
    })
  }

  // Controling the modal arrows to change through each key date that took place at Arthurs house in elm grove
  onModalNextClick = (slide) => {
    const currentIndex = elmGroveMapData.indexOf(slide)
    const nextIndex = (currentIndex + 1) % elmGroveMapData.length
    const counterIndex = (this.state.counterIndex === 5 ? 1 : this.state.counterIndex + 1)

    this.setState({
      arthursHouse: elmGroveMapData[nextIndex].index,
      current: elmGroveMapData[nextIndex].index,
      counterIndex: counterIndex
    })
  }

  onClickArthursHousePopup = () => {
    this.setState({ArthursHousePopup: false})
  }

  getLocation() {
    if (navigator.geolocation) {
      const success = (position) => {
        const xlocation = position.coords.latitude;
        const ylocation = position.coords.longitude;
        console.log("x: " + xlocation + " y: " + ylocation);
        this.setState({
          x: xlocation
        });
        this.setState({
          y: ylocation
        });
        console.log(this.state.x);
      }
      const options = { enableHighAccuracy: true, maximumAge: 1000 };
      let locationid = navigator.geolocation.watchPosition(success, (err) => { console.error('ERROR(' + err.code + '): ' + err.message) }, options);
      this.setState({ id: locationid });
    } else {
      console.log("didnt work");
    }
  }

  reCenter() {
    this.setState({
      center: [this.state.x, this.state.y]
    });
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

        <section className="flex justify-center items-center">

          {/* Modal for main map items */}
          {mainMapData.map(slide => {
              return (
                <TimelineModal
                  modalActive={this.state.modalActive}
                  onModalClick={this.onMarkerClick}
                  slides={slide}
                  key={slide.index}
                  current={this.state.current}
                />
              )
            })}

          
            {/* Modal for Arthurs House map items hidden on mobile */}
            <div className="arthurs-house__container">
            {elmGroveMapData.filter(slide => this.state.arthursHouse === slide.index).map(filteredSlide => (
                  <TimelineModal
                    modalActive={this.state.modalActive}
                    onModalClick={this.onMarkerClick}
                    slides={filteredSlide}
                    key={filteredSlide.index}
                    index={filteredSlide.index}
                    current={this.state.current}
                    modalPrevious={this.onModalPreviousClick}
                    modalNext={this.onModalNextClick}
                    counterIndex={this.state.counterIndex}
                  />
            ))}
            </div>

            {/* Modal for Arthurs house on mobile refactored to be scrollable by swipe */}
              {this.state.arthursHouse === 3 && this.state.modalActive === true && this.state.current === 3 && (
                <React.Fragment>
                {/* pop up to inform user to swipe across each date */}
                {this.state.ArthursHousePopup === true &&
                  <div className="flex flex-col items-center text-center justify-center lg:hidden absolute h-full w-full inset-0 bg-primary z-50">
                    <div className="wrapper">
                      <p className="text-white text-3xl pb-8">Arthur's House at No. 1 Bush Villas</p>
                      <p className="text-white text-xl pb-8">Swipe to navigate through each event that took place here at his home in Southsea</p>
                      <button onClick={this.onClickArthursHousePopup} className="btn btn--secondary uppercase">Continue</button>
                    </div>
                  </div>
                }

                <div className="arthurs-house__slider">
                  {elmGroveMapData.map(slide => (
                    <div data-key={slide.index} key={slide.index} className="arthurs-house-modal__container bg-white">
                        <div className="close__container">
                            <button onClick={this.onMarkerClick} className="close"></button>
                        </div>
                        <div className="responsive-img aspect-ratio timeline-Modal__img-container">
                            <img alt={slide.headline} src={slide.src} ></img>
                        </div>
                        <div className="p-4 timeline-Modal__txt-Container">
                            <h1 className="text-offBlack lg:text-xl font-semibold lg:pb-2">{slide.headline}</h1>
                            <p className="text-offBlack lg:text-3xl uppercase font-bold lg:pb-2">{slide.date}</p>
                            <hr className="lg:pb-2"></hr>
                            <p className="text-offBlack lg:text-xl pb-2">{slide.text}</p>
                            <hr className="lg:pb-2"></hr>
                            {slide.link ? <a alt="" className="text-blue-700 text-lg" href={slide.link}>Find out more</a> : null}
                        </div>
                    </div>
                  ))}
              </div>
              </React.Fragment>
              )}

          {/* Containing div to blur the map when modal is active */}
          <div className={`h-screen relative w-full ${this.state.modalActive === true ? 'pointer-events-none' : ''}`} style={{...this.state.bgBlur < 0.1 ? modalActive: modalInactive}}>
            <Map center={this.state.center} zoom={14} zoomControl={false} className="responsive-map">
              <TileLayer
                url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXZhbmdlbGluZXBhcGFuIiwiYSI6ImNrNmF3cGk2YjBjOTQzbG12MXNsa216ZmsifQ.JUuiqgZ0LktXMNWFRSX4Hw"
                attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>"
              />
              <Marker icon={this.userMarker} position={[this.state.x, this.state.y]}></Marker>
              {/* Markers for the main map data */}
              {mainMapData.map(slide => {
                return (
                  slide.positionA & slide.positionB ? <Marker icon={this.popUpMarker} key={slide.index} onClick={()=>{if(this.state.modalActive === false) {this.onMarkerClick(slide.index);}}} position={[slide.positionA, slide.positionB]} /> : null
                )
              })} 

              {/* Markers to scroll over arthurs house on desktop */}
              {elmGroveMapData.filter(slide => this.state.arthursHouse === slide.index).map(filteredSlide => (
                filteredSlide.positionA & filteredSlide.positionB ? <Marker icon={this.popUpMarker} key={filteredSlide.index} onClick={()=>{if(this.state.modalActive === false) { this.onMarkerClick(filteredSlide.index);}}} position={[filteredSlide.positionA, filteredSlide.positionB]} /> : null
              ))} 
              <ZoomControl position="bottomright" />
              <Control position="bottomright" >
              <button className="center-btn" onClick={() => this.reCenter()}>
                  <img alt="" src={require('../assets/images/center.png')} />
              </button>
              </Control>
            </Map>
          </div>
        </section>
      </React.Fragment>
    );
  }
}