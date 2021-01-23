import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/strictaccess">Acesso restrito!</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes />
      </Router>
    );
  }
}

export default App;
