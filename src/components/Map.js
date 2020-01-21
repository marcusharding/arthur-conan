import React from 'react';
import ReactDOM from 'react-dom';
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'


class PortsmouthMap extends React.Component {
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
      <div className="responsive-map aspect-ratio">
      <Map className="map" center={[this.state.x, this.state.y]} zoom={16} >
        <Marker anchor={[this.state.x, this.state.y]} payload={1} onClick={({ event, anchor, payload }) => {}} />
    
        <Overlay anchor={[this.state.x, this.state.y]} offset={[0, 0]}>
        <p>x = {this.state.x}, y = {this.state.y}</p>
        </Overlay>
      </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <PortsmouthMap />,
  document.getElementById('root')
);



export default PortsmouthMap;



