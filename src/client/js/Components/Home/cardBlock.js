import React from 'react';

import PropTypes from 'prop-types';

import FilmCard from './filmCard';
import CinemaCard from './cinemaCard';

import {
  SORT_FILMS,
  SORT_CINEMA
} from "../../constants";


class CardBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortFilmValue: 'rate',
      sortCinemaValue: 'rate',
      cards: []
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.sort = this.sort.bind(this);
  }

  handleOptionChange(event) {
    const {data, type} = this.props;
    if (type === 'films') {
      this.setState({sortFilmValue: event.target.value});
    }
    else {
      this.setState({sortCinemaValue: event.target.value});
    }

    this.sort(data, event.target.value);
  }

  componentWillReceiveProps(props) {
    const sortValue = props.type === 'films'? this.state.sortFilmValue: this.state.sortCinemaValue;
    this.sort(props.data, sortValue);
  }

  sort(data, value) {
    const cards = data.cards;
    const cardsSorted = cards.slice();

    switch (value) {
      case('rate'):
        cardsSorted.sort((a, b) => {
          if (parseInt(a.details.rate) > parseInt(b.details.rate)) {
            return -1;
          }
          if (parseInt(a.details.rate) < parseInt(b.details.rate)) {
            return 1;
          }
          return 0;
        });
        this.setState({cards: cardsSorted});
        break;
      case('alphabetically'):
        cardsSorted.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        this.setState({cards: cardsSorted});
        break;
      case('novelty'):
        cardsSorted.sort((a, b) => {
          if (a.details.releaseDate > b.details.releaseDate) {
            return -1;
          }
          if (a.details.releaseDate < b.details.releaseDate) {
            return 1;
          }
          return 0;
        });
        this.setState({cards: cardsSorted});
        break;
      case('nearest'):
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const myLat = position.coords.latitude;
            const myLong = position.coords.longitude;
            cardsSorted.sort((a, b) => {
              const diffA = (a.details.location.latitude - myLat) + (a.details.location.longitude - myLong);
              const diffB = (b.details.location.latitude - myLat) + (b.details.location.longitude - myLong);

              if (diffA > diffB) {
                return 1;
              } if (diffA < diffB) {
                return -1;
              }
              return 0;
            });
            this.setState({cards: cardsSorted});
            return 0;
          });
        } else {
          alert('Геолокация недоступна'); // eslint-disable-line no-alert
        }
        break;
    }
  }

  render() {
    const {
      type,
      names
    } = this.props;

    const allCards = this.state.cards.map((elCard, index) => {
      let card;
      switch (type) {
        case ("films"):
          card = <FilmCard card={elCard} type={type} names={names}/>;
          break;
        case ("cinema"):
          card = <CinemaCard card={elCard} type={type} names={names}/>;
          break;
        default:
          card = <div>Ошибка</div>
      }

      return <div key={"card_" + index} className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 pt-2 pb-2 ">{card}</div>;
    });

    const sortList = [];
    let sortListValue;

    switch (type) {
      case ('films'):
        sortListValue = SORT_FILMS;
        break;

      case ('cinema'):
        sortListValue = SORT_CINEMA;
        break;
    }

    for (const key in sortListValue) {
      sortList.push(<option value={key} key={key}>{sortListValue[key]}</option>);
    }

    return (
      <div className="tab-content pl-1 pr-1" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-films" role="tabpanel" aria-labelledby="nav-films-tab">
          <nav className="col">
            <div className="form-group mt-1 mb-3">
              <label htmlFor="exampleFormControlSelect1">Cортировать:</label>
              <select
                value={this.props.type === 'films' ? this.state.sortFilmValue : this.state.sortCinemaValue}
                className="form-control col-xl-2 col-lg-4 col-sm-5 col ml-1 d-inline-block"
                id="sort-form"
                onChange={this.handleOptionChange}>
                {sortList}
              </select>
            </div>
          </nav>
          <div className="row">
            {allCards}
          </div>
        </div>
      </div>
    )
  }
}

CardBlock.propTypes = {
  data: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  names: PropTypes.array.isRequired
};

export default CardBlock;
