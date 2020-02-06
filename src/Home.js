import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import { PortsmouthMap } from './components/Map';
import Timeline from './components/Timeline';
import Error from './components/Error';
import Navigation from './components/01-global/Navigation';

export class App extends Component {
  render() {
    return (      
      <Fragment>
        <BrowserRouter>
          <div>
            <Navigation />
              <Switch>
              <Route path="/" component={LandingPage} exact/>
              <Route path="/Map" component={PortsmouthMap}/>
              <Route path="/Timeline" component={Timeline}/>
              <Route component={Error}/>
            </Switch>
          </div> 
        </BrowserRouter>
      </Fragment>
      
      
    );
  }
}

export default App;

