import React, { Component } from 'react';
import Users from './Components/Users';
import Posts from './Components/Posts';
import Details from './Components/Details';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Global.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Users} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/details/:id" component={Details} />
      </div>
      </Router>
    )
  }
}

export default App;
