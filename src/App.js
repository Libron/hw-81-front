import React, { Component } from 'react';
import './App.css';
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import MainPage from "./containers/MainPage";
import axios from 'axios'

class App extends Component {
    render() {
    return (
          <div className="App">
              <Container>
                  <Switch>
                      <Route path="/" exact component={MainPage} />
                      <Route path="/:shortUrl" exact render={() => <h2>Bye</h2>} />
                  </Switch>
              </Container>
          </div>
    );
  }
}

export default App;
