import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { LandingPage } from './components/LandingPage'
import { PortsmouthMap } from './components/Map'
import { Timeline } from './components/04-components/timeline/Timeline'
import Error from './components/Error'
import { HomeLoading } from '../src/components/01-global/homepageLoading'

export class App extends Component {

  constructor(props){
    super(props)
    this.state = {
       loading: false,
       done: false,
    }
 }

 componentDidMount() {
  setTimeout(() => {
      this.setState({ loading: true });
  }, 1000);
  setTimeout(() => {
      this.setState({ done: true });
  }, 2000);
}

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <HomeLoading state={this.state} />
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
