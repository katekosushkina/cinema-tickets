import React from 'react';
import {
  Link
} from 'react-router-dom';

import PropTypes from 'prop-types';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.hide = this.hide.bind(this);
  }


  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  handleSubmit(event) {
    const {
      names
    } = this.props;
    let flag = 0;
    names.forEach(el => {
      if (el.name.toLowerCase() === this.state.inputValue.toLowerCase()) {
        flag = 1;
        window.location = el.link;
      }
    });
    if (flag === 0) {
      alert("Ничего не найдено!"); // eslint-disable-line no-alert
    }
    event.preventDefault();
  }

  onFocus() {
    document.querySelector('.dropdown-absolute').style = 'display: block';
  }

  onBlur() {
    setTimeout(this.hide, 500);
  }

  hide() {
    const dropdown = document.querySelector('.dropdown-absolute');
    if (dropdown) {
      dropdown.style = 'display: none';
    }
  }

  render() {
    const {
      names,
    } = this.props;
    return (
      <div className="search-bar w-100 position-relative">
        <div className="d-sm-inline-flex m-auto">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.state.value}
                 onChange={this.handleChange} onFocus={this.onFocus} onBlur={this.onBlur} autoFocus/>
          <button className="btn btn-outline-success my-2 my-sm-0 d-inline-block" type="submit" onClick={this.handleSubmit}>Search</button>
        </div>
        <div className="dropdown-absolute mb-1 w-100">{names.filter(el => this.state.inputValue &&
        el.name.toLowerCase().indexOf(this.state.inputValue.toLowerCase()) !== -1).map((el, i) =>
          <Link to={el.link} key={"link-" + i} className="dropdown-absolute-item w-100 pl-1 pr-1">{el.name + " (" + el.category + ")"}</Link>)}
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  names: PropTypes.array.isRequired
};

export default SearchBar;
