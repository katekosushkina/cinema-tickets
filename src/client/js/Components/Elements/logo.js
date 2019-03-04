import React from 'react';
import {
  Link
} from 'react-router-dom';

class Logo extends React.Component {

  render() {
    return (
      <Link to="/" className="navbar-brand">
        <img id="logo" src="./static/img/logo.png" alt="logo"/>
      </Link>
    )
  }
}
export default Logo;
