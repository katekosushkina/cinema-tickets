import React from 'react';

import MainBlock from './mainBlock';


class GetDataFromJson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  getData() {
    return fetch('getFilmsAndCinema')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson});
      })
      .catch((err) => {
        console.log(err); // eslint-disable-line no-console
      })
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <MainBlock data={this.state.data}/>
    )
  }
}

export default GetDataFromJson;
