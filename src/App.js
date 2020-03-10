import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  sidedrawerToggleClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };


  componentDidMount() {
    this.setState({ sideDrawerOpen: false });
    setTimeout(() => {
      this.setState({ loading: true });
    }, 1000);
    setTimeout(() => {
      this.setState({ done: true });
    }, 2000);
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
              <Route path="/" component={LandingPage} exact />
              <Route path="/Map" component={PortsmouthMap} />
              <Route path="/Timeline" component={Timeline} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}
