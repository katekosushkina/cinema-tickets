import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              {this.props.tabs.filter(t => t.position === 'left').map((tab) => {
                return (
                  <li key={tab.key}
                      className={`${tab.key} nav-item ${tab.active ? 'active' : ''}`}>
                    <Link className="nav-link" to={{
                      pathname: tab.key
                    }}>
                      {tab.content}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {this.props.tabs.filter(t => t.position === 'right').map((tab) => {
                return (
                  <li key={tab.key} className={`nav-item ${tab.active ? 'active' : ''}`}>
                    <Link to={{
                      pathname: tab.key
                    }}>
                      {tab.content}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  tabs: PropTypes.array,
  changeTab: PropTypes.func,
};

export default Header;
