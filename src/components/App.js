import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Nav from './header/Nav';
// import Home from './home/Home'; //<Route exact path='/' component={Home}/>

import Routes from '../routes';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Nav title="Hello"/>
        </nav>

        <section>
            <Switch>
              <Routes/>
            </Switch>
        </section>

        <footer>

        </footer>
      </div>
    );
  }
}
