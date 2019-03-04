import React from 'react';

import PropTypes from 'prop-types';

import Logo from "./logo";
import Buttons from "./buttonGroup/buttons"
import HomePageSlider from "../Home/homePageSlider";
import SearchBar from "./searchBar"


class Header extends React.Component {
  render() {
    const {
      page,
      names
    } = this.props;
    let header;
    switch (page) {
      case ('home'):
        header = <div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <Logo/>
            <h2 className="col text-center">Не пропустите премьеру!</h2>
            <Buttons/>
          </nav>
          <HomePageSlider/>
        </div>;
        break;

      case ('openPage'):
        header = <div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <Logo/>
            <div className="col text-center">
              <SearchBar names={names}/>
            </div>
            <Buttons/>
          </nav>
        </div>;
        break;
    }
    return (
      <header>
        {header}
      </header>
    )
  }
}

Header.propTypes = {
  page: PropTypes.string.isRequired,
  names: undefined || PropTypes.array
};
export default Header;
