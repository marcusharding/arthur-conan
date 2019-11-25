import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Map from './components/Map';
import Timeline from './components/Timeline';
import Error from './components/Error';
import Navigation from './components/Navigation';
import './styles/app.scss';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/Map" component={Map}/>
             <Route path="/Timeline" component={Timeline}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;

