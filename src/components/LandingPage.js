import React from 'react';
import { NavLink } from 'react-router-dom';
import BgImage from '../assets/images/landing_background.jpg';
import { Loading } from '../components/01-global/loading'

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
        <Loading
            state={this.state.loading}
          />
        <div className="header">
          <img alt="" className="header_img opacity-25" src={BgImage} />
          <div className="z-10 text-center wrapper">
            <h2 className="font-gabriela text-white text-4xl">The life of</h2>
            <h1 className="font-gabriela text-white text-6xl pb-6">Arthur Conan-Doyle</h1>
            <p className="text-white text-2xl">The best way to navigate the life of Arthur Conan-Doyle, lets get started</p>
            <div className="home-buttons__container flex flex-col lg:flex-row justify-center items-center">
              <NavLink className="btn btn--primary lg:mr-8" to="/Map">Map</NavLink>
              <NavLink className="btn btn--secondary" to="/Timeline">Timeline</NavLink>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
