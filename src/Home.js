import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Map from './components/Map';
import Timeline from './components/Timeline';
import Error from './components/Error';
import Nav from './components/Navigation/Nav';
import SideDrawer from './components/Navigation/SideDrawer';
import Backdrop from './components/Navigation/Backdrop';

class App extends Component {

  state = {
    sideDrawerOpen: false
  };


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

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
   
    return (   
      <div className="App_margin">  
      <Fragment>
        <BrowserRouter>
        <div className='App'>
          <Nav drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer  sidedrawerClickHandler={this.sidedrawerToggleClickHandler}  show={this.state.sideDrawerOpen} />
              { backdrop }
              <Switch>
              <Route path="/" component={LandingPage} exact/>
              <Route path="/Map" component={Map}/>
              <Route path="/Timeline" component={Timeline}/>
              <Route component={Error}/>
            </Switch>
          </div> 
        </BrowserRouter>

      </Fragment>
      </div> 
      
    );
  }
}

export default App;

