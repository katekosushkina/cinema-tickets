import React from 'react';
import {
  Link
} from 'react-router-dom';

import PropTypes from 'prop-types';

import {IMG_URL_FILMS} from "../../constants";


class filmCard extends React.Component {
  render() {
    const {
      card,
      type,
      names
    } = this.props;

    return (
      <div className="card align-items-stretch">
        <Link to={{
          pathname: type,
          params: {type, names, card}
        }}>
          <div className="card-image d-flex justify-content-center align-items-center">
            <img src={IMG_URL_FILMS+card.img} alt={card.img}/>
          </div>
        </Link>
          <div className="card-body">
            <Link to={{
              pathname: type,
              params: {type, names}}} className="text-dark">
              <h5 className="card-title">{card.name}</h5>
            </Link>
            <Link to={{
              pathname: type,
              params: {type, names}}} className="btn btn-primary">Купить билет</Link>
            <a className="btn btn-secondary" href={card.trailer} target="_blank">
              Посмотреть трейлер
            </a>
          </div>
      </div>
    )
  }
}

filmCard.propTypes = {
  card: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  names: PropTypes.array.isRequired
};

export default filmCard;
