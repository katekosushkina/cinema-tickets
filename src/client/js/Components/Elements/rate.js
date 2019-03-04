import React from 'react';

import PropTypes from 'prop-types';

class Rate extends React.Component {
  render() {
    const {
      rate
    } = this.props;

    let stars;

    switch (rate) {
      case ('1'):
        stars = <div>
          <i className="fas fa-star-half-alt"/>
          <i className = "far fa-star" />
          <i className = "far fa-star" />
          <i className = "far fa-star" />
          <i className = "far fa-star" />
        </div>;
        break;
      case ('2'):
        stars = <div>
          <i className="fas fa-star"/>
          <i className = "far fa-star" />
          <i className = "far fa-star" />
          <i className = "far fa-star" />
          <i className = "far fa-star" />
        </div>;
        break;
      case ('3'):
        stars = <div>
          <i className="fas fa-star"/>
          <i className="fas fa-star-half-alt"/>
          <i className = "far fa-star" />
          <i className = "far fa-star" />
          <i className = "far fa-star" />
        </div>;
        break;
      case ('4'):
        stars = <div>
          <i className="fas fa-star"/>
          <i className="fas fa-star"/>
          <i className = "far fa-star" />
          <i className = "far fa-star" />
          <i className = "far fa-star" />
        </div>;
        break;
      case ('5'):
        stars = <div>
          <i className="fas fa-star"/>
          <i className="fas fa-star"/>
          <i className="fas fa-star-half-alt"/>
          <i className = "far fa-star" />
          <i className = "far fa-star" />
        </div>;
        break;
      case ('6'):
        stars = <div>
          <i className="fas fa-star"/>
          <i className="fas fa-star"/>
          <i className="fas fa-star"/>
          <i className = "far fa-star" />
          <i className = "far fa-star" />
        </div>;
        break;
      case ('7'):
        stars = <div>
          <i className="fas fa-star"/>
          <i className="fas fa-star"/>
          <i className="fas fa-star"/>
          <i className="fas fa-star-half-alt"/>
          <i className = "far fa-star" />
        </div>;
        break;
      case ('8'):
        stars = <div>
          <i className="fas fa-star"/>
          <i className="fas fa-star"/>
          <i className="fas fa-star"/>
          <i className="fas fa-star"/>
          <i className = "far fa-star" />
        </div>;
        break;
      case ('9'):
        stars = <div>
          <i className="fas fa-star"/>
          <i className="fas fa-star"/>
          <i className="fas fa-star"/>
          <i className="fas fa-star"/>
          <i className="fas fa-star-half-alt"/>
        </div>;
        break;
      case ('10'):
        stars = <div>
          <i className="fas fa-star"/>
          <i className="fas fa-star"/>
          <i className="fas fa-star"/>
          <i className="fas fa-star"/>
          <i className="fas fa-star"/>
        </div>;
        break;
    }
    return (
      <div className="card-body flex-none">
      {stars}
      </div>
    )
  }
}
Rate.propTypes = {
  rate: PropTypes.string.isRequired
};

export default Rate;
