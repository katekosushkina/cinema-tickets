import React from 'react';

import GetDataFromJson from './getDataFromJson';

import Footer from "../Elements/footer";
import Header from "../Elements/header";


class Home extends React.Component {
  render() {
    return (
      <div>
        <Header page="home" names={[]}/>
        <GetDataFromJson/>
        <Footer/>
      </div>
    )
  }
}
export default Home;
