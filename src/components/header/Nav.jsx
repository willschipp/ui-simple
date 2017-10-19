import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Nav extends React.Component {

  render() {
    return (
      <ul>
        <h3>{this.props.title}</h3>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    );
  }
}

Nav.propTypes = {
  title: PropTypes.string
};

export default Nav;
