import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// import Map from 'pigeon-maps'
// import Marker from 'pigeon-marker'
// import Overlay from 'pigeon-overlay'


export class PortsmouthMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      id: null
    }
  }


  componentDidMount() {
    this.getLocation()
    var mymap = L.map('mapid').setView([this.state.x, this.state.y], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiZXZhbmdlbGluZXBhcGFuIiwiYSI6ImNrNmF3cGk2YjBjOTQzbG12MXNsa216ZmsifQ.JUuiqgZ0LktXMNWFRSX4Hw'
}).addTo(mymap);

  }

  componentWillUnmount() {
      navigator.geolocation.clearWatch(this.id);
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

      };

      const options = {enableHighAccuracy: true, maximumAge: 10000};

      this.id = navigator.geolocation.watchPosition(success, (err) => {console.error('ERROR(' + err.code + '): ' + err.message)}, options);
    }
  }






  render(){

    return (
      // <div className="responsive-map aspect-ratio">
      // <Map className="map" center={[this.state.x, this.state.y]} zoom={16} >
      //   <Marker anchor={[this.state.x, this.state.y]} payload={1} onClick={({ event, anchor, payload }) => {}} />
    
      //   <Overlay anchor={[this.state.x, this.state.y]} offset={[0, 0]}>
      //   <p>x = {this.state.x}, y = {this.state.y}</p>
      //   </Overlay>
      // </Map>
      // </div>
      <div id="mapid" className="responsive-map"></div>
    
    );
  }
}





