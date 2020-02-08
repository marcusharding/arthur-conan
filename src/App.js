import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Map from './components/Map';
import { Timeline } from './components/04-components/Timeline';
import Error from './components/Error';
import Navigation from './components/01-global/Navigation';

class App extends Component {
  render() {
    return (      
      <Fragment>
        <BrowserRouter>
          <div>
            <Navigation />
              <Switch>
              <Route path="/" component={LandingPage} exact/>
              <Route path="/Map" component={Map}/>
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

