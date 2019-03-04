import React from 'react';
import {ButtonGroup} from 'reactstrap';


import ButtonRegister from "./buttonRegister";
import ButtonLoginWithModalWindow from "./buttonLoginWithModalWindow";

export default class Buttons extends React.Component {
  render() {
    return (
      <ButtonGroup className="ml-auto">
        <ButtonRegister/>
        <ButtonLoginWithModalWindow/>
      </ButtonGroup>
    );
  }
}