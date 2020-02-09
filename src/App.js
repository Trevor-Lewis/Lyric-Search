import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './components/Layout/NavBar'
import Index from './components/Layout/Index'
import {Provider} from './context';
import Lyrics from './components/tracks/Lyrics';


class App extends Component {
  render() {
    return (
      <Provider>  
        <Router>
          <React.Fragment>
            <NavBar />
            <div className="container">
              <Switch>
                <Route exact path='/' component={Index} />
                <Route exact path='/lyrics/track/:id' component={Lyrics} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
