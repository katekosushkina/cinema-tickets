import React from 'react';

import Footer from "../Elements/footer";
import Logo from "../Elements/logo";
import Buttons from "../Elements/buttonGroup/buttons";
import SearchBar from "../Elements/searchBar";


class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light">
            <Logo/>
            <SearchBar names=""/>
            <Buttons/>
          </nav>
        </header>
        {}
        <Footer/>
      </div>
    )
  }
}
export default Home;
