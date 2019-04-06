import React, { Component } from 'react';
import './App.css';
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import MainPage from "./containers/MainPage";
import LinkProvider from "./containers/LinkProvider/LinkProvider";
class App extends Component {

    render() {
    return (
          <div className="App">
              <Container>
                  <Switch>
                      <Route path="/" exact component={MainPage} />
                      <Route path="/:shortUrl" exact component={LinkProvider} />
                  </Switch>
              </Container>
          </div>
    );
  }
}

export default App;
