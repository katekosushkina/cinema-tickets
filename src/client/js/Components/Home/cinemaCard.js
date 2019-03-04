import React from 'react';
import {
  Link
} from 'react-router-dom';

import PropTypes from 'prop-types';

import {IMG_URL_CINEMA} from "../../constants";


class CinemaCard extends React.Component {
  render() {
    const {
      card,
      type
    } = this.props;

    return (
      <div className="card">
        <Link to={type+card.link}>
          <div className="card-image">
            <img className="card-img-top" src={IMG_URL_CINEMA + card.img} alt={card.img}/>
          </div>
        </Link>
        <div className="card-body">
          <Link to={type+card.link} className="text-dark">
            <h5 className="card-title">{card.name}</h5>
          </Link>
          <Link to={type+card.link} className="btn btn-primary">Посмотреть сеансы</Link>
        </div>
      </div>
    )
  }
}

CinemaCard.propTypes = {
  card: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  names: PropTypes.array.isRequired
};

export default CinemaCard;
