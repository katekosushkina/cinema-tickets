import React from 'react';

import PropTypes from 'prop-types';

import SearchBar from "../Elements/searchBar";
import CardBlock from "./cardBlock";


class MainBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabKey: 'films'
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(activeTabKey) {
    this.setState({
      activeTabKey
    });
  }


  render() {
    const {
      data,
    } = this.props;

    if (!data) {
      return null;
    }

    const names = [];
    data.forEach((el) => {
      el.cards.forEach((card) => {
        if (!names.find(it => it.name === card.name)) {
          names.push({
            name: card.name,
            category: el.name.toLowerCase(),
            link: card.link
          });
        }
      });
    });

    const navLink = data.map((category) => (
      <a className={`nav-item nav-link col-6 col-sm-4 col-md-3 col-lg-2 col-xxl-1 ${(this.state.activeTabKey === category.key) ? 'active' : ''}`}
         onClick={() => {
           this.toggle(category.key)
         }}
         key={category.key}
         role="tab">{category.name}
      </a>
    ));

    const dataFiltred = this.props.data.filter(item => item.key === this.state.activeTabKey)[0];

    return (
      <main>
        <nav className="navbar navbar-light p-0">
          <div className="nav nav-tabs w-100 pl-1 pr-1 pr-sm-0" id="nav-tab" role="tablist">
            {navLink}
            <form className="form-inline ml-md-auto p-2 formedia" id="main-form">
              <SearchBar names={names}/>
            </form>
          </div>
        </nav>
        <CardBlock data={dataFiltred || {}} type={this.state.activeTabKey} names={names}/>
      </main>
    )
  }
}

MainBlock.propTypes = {
  data: PropTypes.array.isRequired
};

export default MainBlock;
