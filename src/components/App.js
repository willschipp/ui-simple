import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import asyncComponent from './AsyncComponent';
import Nav from './header/Nav';
// import Home from './home/Home'; //<Route exact path='/' component={Home}/>
const AsyncHome = asyncComponent(() => import("./home/Home"));
const AsyncAbout = asyncComponent(() => import("./about/About"));

// import Routes from '../routes';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Nav title="Hello"/>
        </nav>

        <section>
            <Switch>
              <Route path="/" exact component={AsyncHome} />
              <Route path="/about" exact component={AsyncAbout} />
            </Switch>
        </section>

        <footer>

        </footer>
      </div>
    );
  }
}
