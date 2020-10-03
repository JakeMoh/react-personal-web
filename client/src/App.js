import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Components/Home';
import Comment from './Components/project/Comment';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/project/comment" component={Comment} />

            {/* If no url matches the above return not found page to the user */}
            {/* <Route component={Notfound} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
