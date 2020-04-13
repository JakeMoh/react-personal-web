import React from "react";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Notfound from "./component/Notfound";

// Styles
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* If no url matches the above return not found page to the user */}
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
