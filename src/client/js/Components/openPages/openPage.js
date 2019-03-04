import React from 'react';

import PropTypes from 'prop-types';

import FilmOpened from "./filmOpened";
import CinemaOpened from "./cinemaOpened";
import Footer from "../Elements/footer";
import Header from "../Elements/header";


class OpenPage extends React.Component {
  render() {
    if (!this.props.location.params) {
      return null
    }
    const {
      names,
      type,
      card
    } = this.props.location.params;
    return (
      <div>
        <Header page="openPage" names={names}/>
        {type === 'films' ? <FilmOpened card={card}/> : <CinemaOpened card={card}/>}
        <Footer/>
      </div>
    )
  }
}

OpenPage.propTypes = {
  location: PropTypes.object.isRequired
};

export default OpenPage;
