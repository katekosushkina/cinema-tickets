import React from 'react';
import {
  Link
} from 'react-router-dom';

class HomePageSlider extends React.Component {

  render() {
    return (
      <div id="bannerSlider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <Link to="/" className="carousel-item active">
            <img className="d-block w-100" src="static/img/banner/fantasticBeasts.jpg" alt="First slide"/>
          </Link>
          <Link to="/" className="carousel-item">
            <img className="d-block w-100" src="static/img/banner/smallfoot.jpg" alt="Second slide"/>
          </Link>
          <Link to="/" className="carousel-item">
            <img className="d-block w-100" src="static/img/banner/bohemianRhapsody.jpg" alt="Third slide"/>
          </Link>
        </div>
      </div>
    )
  }
}
export default HomePageSlider;
