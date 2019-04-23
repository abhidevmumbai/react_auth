import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import { LoginPage } from "./LoginPage";
import { SearchPage } from "./SearchPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Router>
          <Route exact path="/" component={SearchPage} />
          {/* <Route exact path="/" render={() => (
            loggedIn ? (
              <Redirect to="/dashboard"/>
            ) : (
              <PublicHomePage/>
            )
          )}/> */}
          <Route exact path="/login" component={LoginPage} />
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
