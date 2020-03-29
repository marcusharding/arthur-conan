import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './tailwind.css'
import { LandingPage } from './components/LandingPage'
import { PortsmouthMap } from './components/Map'
import { Timeline } from './components/04-components/timeline/Timeline'
import Error from './components/Error'
import { HomeLoading } from '../src/components/01-global/homepageLoading'
import Nav from './components/Navigation/Nav';
import SideDrawer from './components/Navigation/SideDrawer';


export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      done: false,
      sideDrawerOpen: false,
    }

    this.appOnLoad = this.appOnLoad.bind(this);
  }

  // Function to control opening the sideDrawer
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  // Function to close the sideDrawer on button click
  sidedrawerToggleClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  // Function to close sideDrawer when clicking on the body
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  componentDidMount() {
    this.backdropClickHandler();
  }

  appOnLoad = () => {
    setTimeout(() => {
      this.setState({ loading: true });
    }, 1000);
    setTimeout(() => {
      this.setState({ done: true });
    }, 2000);
    console.log('didmount');
  }

  render() {

    // Setting two variables to apply some style to blur and fade the background when sideDraw is active / inActive 
    const sideMenuActive = {
      filter: `blur(10px)`,
      opacity: 0.1,
    }
    const sideMenuInactive = {
      filter: `blur(0px)`,
      opacity: 1,
    }

    return (
      <Fragment>

        <BrowserRouter>
          <HomeLoading state={this.state} />
          <Nav
            sideDrawerOpen={this.state.sideDrawerOpen}
            drawerClickHandler={this.drawerToggleClickHandler}
          />
          <SideDrawer sidedrawerClickHandler={this.sidedrawerToggleClickHandler} show={this.state.sideDrawerOpen} />
          <div onClick={this.backdropClickHandler} className="h-full w-full" style={{ ...this.state.sideDrawerOpen === false ? sideMenuInactive : sideMenuActive }}>
            <Switch>
              <Route path="/" render={() => <LandingPage appOnLoad={this.appOnLoad} isAuthed={true} />} exact />
              <Route path="/Map" render={() => <PortsmouthMap appOnLoad={this.appOnLoad} isAuthed={true} />} />
              <Route path="/Timeline" render={() => <Timeline appOnLoad={this.appOnLoad} isAuthed={true} />} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}
