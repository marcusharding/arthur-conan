import React from 'react';
import { NavLink } from 'react-router-dom';
import BgImage from '../assets/images/landing_background.jpg';

export class LandingPage extends React.Component {

  constructor(props){
    super(props)
    this.state = {
       loading: false,
    }
 }

 componentDidMount() {
  setTimeout(() => {
    this.setState({ loading: true })
    }, 800);
}

  render() {
    return (
      <React.Fragment>
        {/* Loading component  */}
        <div className="header">
          <img alt="Landing Page Background" className="header_img opacity-25" onLoad={this.props.appOnLoad} src={BgImage} />
          <div className="z-10 text-center wrapper">
            <h2 className="font-gabriela text-white text-2xl lg:text-4xl">The life of</h2>
            <h1 className="font-gabriela text-white text-3xl lg:text-6xl pb-6">Arthur Conan Doyle</h1>
            <p className="text-white lg:text-2xl pb-6 lg:pb-12">The best way to navigate the life of Arthur Conan Doyle, lets get started</p>
            <div className="home-buttons__container flex flex-col lg:flex-row justify-center items-center">
              <NavLink className="btn btn--primary mb-4 lg:mb-0 lg:mr-8 uppercase" to="/Map">Map</NavLink>
              <NavLink className="btn btn--secondary uppercase" to="/Timeline">Timeline</NavLink>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
