import React, { Component } from "react";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={App} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Routes;
