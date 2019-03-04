import React from 'react';
import {
  Link
} from 'react-router-dom';

import PropTypes from 'prop-types';

import Rate from "../Elements/rate"

import {IMG_URL_FILMS_OPENED, SORT_CINEMA} from "../../constants";


class filmOpened extends React.Component {
  render() {
    const {
      card
    } = this.props;
    const details = card.details;

    const sortList = [];
    for (const key in SORT_CINEMA) {
      sortList.push(<option value={key} key={key}>{SORT_CINEMA[key]}</option>);
    }

    return (

      <main className="row mr-0 mb-4 ml-0">
        <aside className="card p-0 ml-auto mr-auto m-md-0" style={{width: "18rem"}}>
          <a href={card.trailer} target="_blank">
            <img className="card-img-top" src={IMG_URL_FILMS_OPENED + card.img} alt="Card image cap"/>
            <div className="mask d-flex justify-content-center align-items-center">
              <i className="far fa-play-circle"/>
            </div>
          </a>
            <Rate rate={details.rate}/>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="row">
                <div className="question col-6">Дата показа:</div>
                <div className="answer col-6">{details.dates}</div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="question col-6">Страна:</div>
                <div className="answer col-6">{details.country}</div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="question col-6">Длительность:</div>
                <div className="answer col-6">{details.runTime}</div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="question col-6">Жанр:</div>
                <div className="answer col-6">{details.genre}</div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="question col-6">Режиссер:</div>
                <div className="answer col-6">{details.directors.map((el,i) => <div key={'director_'+i}>{el}</div>)}</div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="question col-6">В главных ролях:</div>
                <div className="answer col-6">{details.mainRoles.map((el,i) => <div key={'mainActor_'+i}>{el}</div>)}</div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="question col-6">Возрастное ограничение:</div>
                <div className="answer col-6">{details.ageLimit}</div>
              </div>
            </li>
          </ul>
        </aside>
        <div className="content col mt-4 pl-4">
          <section className="film-name">
            <h1 className="mb-0">
              {card.name}
            </h1>
            <h5><a href="">Сегодня, 19 ноября, понедельник</a></h5>
          </section>
          <section className="row">
            <div className="col active">
              <a className="active" href="">
                <div className="weekday text-dark text-center m-auto">
                  ПН
                </div>
                <div className="date rounded-circle text-secondary text-center m-auto">19</div>
              </a>
            </div>
            <div className="col">
              <a href="">
                <div className="weekday text-dark text-center m-auto">
                  ВТ
                </div>
                <div className="date rounded-circle text-secondary text-center m-auto">20</div>
              </a>
            </div>
            <div className="col">
              <a href="">
                <div className="weekday text-dark text-center m-auto">
                  СР
                </div>
                <div className="date rounded-circle text-secondary text-center m-auto">21</div>
              </a>
            </div>
            <div className="col">
              <a href="">
                <div className="weekday text-dark text-center m-auto">
                  ЧТ
                </div>
                <div className="date rounded-circle text-secondary text-center m-auto">22</div>
              </a>
            </div>
            <div className="col">
              <a href="">
                <div className="weekday text-dark text-center m-auto">
                  ПТ
                </div>
                <div className="date rounded-circle text-secondary text-center m-auto">23</div>
              </a>
            </div>
            <div className="col">
              <a href="">
                <div className="weekday text-dark text-center m-auto">
                  СБ
                </div>
                <div className="date rounded-circle text-secondary text-center m-auto">24</div>
              </a>
            </div>
            <div className="col">
              <a href="">
                <div className="weekday text-dark text-center m-auto">
                  ВС
                </div>
                <div className="date rounded-circle text-secondary text-center m-auto">25</div>
              </a>
            </div>
            <div className="col-xl-5 col">
              <div className="text-dark choose-date">
                Выбрать дату:
              </div>
              <div>
                <input className="choose-date-input form-control" type="text" placeholder="19.11.2018"/>
              </div>
            </div>
          </section>
          <section className="cinemas mt-5">
            <nav>
              <div className="form-group mt-1 mb-3">
                <label htmlFor="exampleFormControlSelect1">Cортировать:</label>
                <select
                  className="form-control col-xl-2 col-lg-4 col-sm-5 col ml-1 d-inline-block"
                  id="sort-form">
                  {sortList}
                </select>
              </div>
            </nav>
            <div className="bg-white p-5">
              <div className="row mb-4">
                <a className="cinema-name cinema-name col-lg-3 col-md-5 col-6" href="../cinemas/belarus.html">Silver Screen</a>
                <div className="times col-lg-8 col-md-7 col-6">
                  <button type="button" className="btn btn-outline-secondary mb-1 pr-0 mr-1 disabled" disabled>
                    <div className="d-inline-block border-right pr-2">
                      11:25
                    </div>
                    <div className="threeD d-inline-block">3D</div>
                  </button>
                  <button type="button" onClick="location.href='../order/order.html'" className="btn btn-outline-success mb-1 pr-0 mr-1">
                    <div className="d-inline-block border-right pr-2">
                      13:00
                    </div>
                    <div className="threeD d-inline-block"></div>
                  </button>
                  <button type="button" onClick="location.href='../order/order.html'" className="btn btn-outline-success mb-1 pr-0 mr-1">
                    <div className="d-inline-block border-right pr-2">
                      15:50
                    </div>
                    <div className="threeD d-inline-block">3D</div>
                  </button>
                  <button type="button" onClick="location.href='../order/order.html'" className="btn btn-outline-success mb-1 pr-0 mr-1">
                    <div className="d-inline-block border-right pr-2">
                      18:20
                    </div>
                    <div className="threeD d-inline-block"></div>
                  </button>
                  <button type="button" onClick="location.href='../order/order.html'" className="btn btn-outline-success mb-1 pr-0 mr-1">
                    <div className="d-inline-block border-right pr-2">
                      21:00
                    </div>
                    <div className="threeD d-inline-block">3D</div>
                  </button>
                </div>
              </div>
              <div className="row mb-4">
                <a className="cinema-name cinema-name col-lg-3 col-md-5 col-6" href="../cinemas/belarus.html">Беларусь</a>
                <div className="times col-lg-8 col-md-7 col-6">
                  <button type="button" className="btn btn-outline-secondary mb-1 pr-0 mr-1 disabled" disabled>
                    <div className="d-inline-block border-right pr-2">
                      11:25
                    </div>
                    <div className="threeD d-inline-block">3D</div>
                  </button>
                  <button type="button" className="btn btn-outline-secondary mb-1 pr-0 mr-1 disabled" disabled>
                    <div className="d-inline-block border-right pr-2">
                      12:50
                    </div>
                    <div className="threeD d-inline-block">3D</div>
                  </button>
                  <button type="button" onClick="location.href='../order/order.html'" className="btn btn-outline-success mb-1 pr-0 mr-1">
                    <div className="d-inline-block border-right pr-2">
                      13:00
                    </div>
                    <div className="threeD d-inline-block"></div>
                  </button>
                  <button type="button" onClick="location.href='../order/order.html'" className="btn btn-outline-success mb-1 pr-0 mr-1">
                    <div className="d-inline-block border-right pr-2">
                      14:40
                    </div>
                    <div className="threeD d-inline-block ">3D</div>
                  </button>
                  <button type="button" onClick="location.href='../order/order.html'" className="btn btn-outline-success mb-1 pr-0 mr-1">
                    <div className="d-inline-block border-right pr-2">
                      15:50
                    </div>
                    <div className="threeD d-inline-block">3D</div>
                  </button>
                  <button type="button" onClick="location.href='../order/order.html'" className="btn btn-outline-success mb-1 pr-0 mr-1">
                    <div className="d-inline-block border-right pr-2">
                      18:20
                    </div>
                    <div className="threeD d-inline-block"></div>
                  </button>
                  <button type="button" onClick="location.href='../order/order.html'" className="btn btn-outline-success mb-1 pr-0 mr-1">
                    <div className="d-inline-block border-right pr-2">
                      21:00
                    </div>
                    <div className="threeD d-inline-block">3D</div>
                  </button>
                </div>
              </div>
              <div className="row mb-4">
                <a className="cinema-name cinema-name col-lg-3 col-md-5 col-6" href="../cinemas/belarus.html">Мир</a>
                <div className="times col-lg-8 col-md-7 col-6">
                  <button type="button" className="btn btn-outline-secondary mb-1 pr-0 mr-1 disabled" disabled>
                    <div className="d-inline-block border-right pr-2">
                      11:25
                    </div>
                    <div className="threeD d-inline-block">3D</div>
                  </button>
                  <button type="button" onClick="location.href='../order/order.html'" className="btn btn-outline-success mb-1 pr-0 mr-1">
                    <div className="d-inline-block border-right pr-2">
                      13:00
                    </div>
                    <div className="threeD d-inline-block"></div>
                  </button>
                  <button type="button" onClick="location.href='../order/order.html'" className="btn btn-outline-success mb-1 pr-0 mr-1 disabled"
                          disabled>
                    <div className="d-inline-block border-right pr-2">
                      15:20
                    </div>
                    <div className="threeD d-inline-block ">3D</div>
                  </button>
                  <button type="button" onClick="location.href='../order/order.html'" className="btn btn-outline-success mb-1 pr-0 mr-1">
                    <div className="d-inline-block border-right pr-2">
                      15:50
                    </div>
                    <div className="threeD d-inline-block">3D</div>
                  </button>
                  <button type="button" onClick="location.href='../order/order.html'" className="btn btn-outline-success mb-1 pr-0 mr-1">
                    <div className="d-inline-block border-right pr-2">
                      18:20
                    </div>
                    <div className="threeD d-inline-block"></div>
                  </button>
                  <button type="button" onClick="location.href='../order/order.html'" className="btn btn-outline-success mb-1 pr-0 mr-1">
                    <div className="d-inline-block border-right pr-2">
                      21:00
                    </div>
                    <div className="threeD d-inline-block">3D</div>
                  </button>
                </div>
              </div>
              <div className="row">
                <a className="cinema-name cinema-name col-lg-3 col-md-5 col-6" href="../cinemas/belarus.html">Победа</a>
                <div className="times col-lg-8 col-md-7 col-6">
                  <button type="button" className="btn btn-outline-secondary mb-1 pr-0 mr-1 disabled" disabled>
                    <div className="d-inline-block border-right pr-2">
                      11:25
                    </div>
                    <div className="threeD d-inline-block">3D</div>
                  </button>
                  <button type="button" onClick="location.href='../order/order.html'" className="btn btn-outline-success mb-1 pr-0 mr-1">
                    <div className="d-inline-block border-right pr-2">
                      13:00
                    </div>
                    <div className="threeD d-inline-block"></div>
                  </button>
                  <button type="button" onClick="location.href='../order/order.html'" className="btn btn-outline-success mb-1 pr-0 mr-1">
                    <div className="d-inline-block border-right pr-2">
                      13:20
                    </div>
                    <div className="threeD d-inline-block ">3D</div>
                  </button>
                  <button type="button" onClick="location.href='../order/order.html'" className="btn btn-outline-success mb-1 pr-0 mr-1">
                    <div className="d-inline-block border-right pr-2">
                      15:50
                    </div>
                    <div className="threeD d-inline-block">3D</div>
                  </button>
                  <button type="button" onClick="location.href='../order/order.html'" className="btn btn-outline-success mb-1 pr-0 mr-1">
                    <div className="d-inline-block border-right pr-2">
                      18:10
                    </div>
                    <div className="threeD d-inline-block"></div>
                  </button>
                  <button type="button" onClick="location.href='../order/order.html'" className="btn btn-outline-success mb-1 pr-0 mr-1 disabled"
                          disabled>
                    <div className="d-inline-block border-right pr-2">
                      21:40
                    </div>
                    <div className="threeD d-inline-block">3D</div>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="about mt-5 card">
            <h2 className="card-header">Описание</h2>
            <div className="text-about card-body">{card.description}
            </div>
          </section>
        </div>
      </main>
    )
  }
}

filmOpened.propTypes = {
  card: PropTypes.object.isRequired
};

export default filmOpened;
