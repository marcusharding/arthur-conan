import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Map, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet'
import { Loading } from '../components/01-global/loading'
import { TimelineModal } from '../components/03-objects/timeline_modal/timeline_modal'


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
      loading: false
    }
    this.userMarker = L.icon({
      iconUrl: require('../assets/images/usermarker.png'),
      iconSize: [20,20]
      });
  }

  componentDidMount() {
    this.getLocation();
    setTimeout(() => {
      this.setState({ loading: true })
      }, 800);
  }

  componentWillUnmount() {
      navigator.geolocation.clearWatch(this.state.id);
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
    const options = {enableHighAccuracy: true, maximumAge: 0};
    let locationid = navigator.geolocation.watchPosition(success, (err) => {console.error('ERROR(' + err.code + '): ' + err.message)}, options);
    this.setState({id: locationid});
  } else {
    console.log("didnt work");
  }
}

  render(){

    return (
      <React.Fragment>
        {/* Loading component  */}
        <Loading
          state={this.state.loading}
        />
        {/* <div id="mapid" className="responsive-map"></div> */}
        <Map center={[this.state.x, this.state.y]} zoom={16} zoomControl={false} className="responsive-map">
          <TileLayer
            url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXZhbmdlbGluZXBhcGFuIiwiYSI6ImNrNmF3cGk2YjBjOTQzbG12MXNsa216ZmsifQ.JUuiqgZ0LktXMNWFRSX4Hw"
            attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>"
          />
          <Marker icon={this.userMarker} position={[this.state.x, this.state.y]}></Marker>
          <Marker position={[50.7906046, -1.0906947]}>
            <Popup>1882 - Conan Doyle moves to Southsea, Portsmouth on the 24 June and sets up his own practice at Bush Villas, Elm Grove.</Popup>
          </Marker>
          <ZoomControl position="bottomright" />
        </Map>
      </React.Fragment>
    );
  }
}





