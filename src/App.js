import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { LandingPage } from './components/LandingPage'
import { PortsmouthMap } from './components/Map'
import { Timeline } from './components/04-components/timeline/Timeline'
import Error from './components/Error'
import { HomeLoading } from '../src/components/01-global/homepageLoading'
import Nav from './components/Navigation/Nav';
import SideDrawer from './components/Navigation/SideDrawer';
import Backdrop from './components/Navigation/Backdrop';


export class App extends Component {

  constructor(props){
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
  setTimeout(() => {
      this.setState({ loading: true });
  }, 1000);
  setTimeout(() => {
      this.setState({ done: true });
  }, 2000);
}

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <Fragment>
        <BrowserRouter>
          <HomeLoading state={this.state} />
          <Nav drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer  sidedrawerClickHandler={this.sidedrawerToggleClickHandler}  show={this.state.sideDrawerOpen} />
          { backdrop }
          <Switch>
            <Route path="/" component={LandingPage} exact/>
            <Route path="/Map" component={PortsmouthMap}/>
            <Route path="/Timeline" component={Timeline}/>
            <Route component={Error}/>
          </Switch> 
        </BrowserRouter>
      </Fragment>
    );
  }
}
