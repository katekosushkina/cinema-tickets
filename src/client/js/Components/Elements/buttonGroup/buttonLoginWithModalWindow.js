/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import LoginForm from './loginForm';

class ButtonLoginWithModalWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="button-width-50">
        <button type="button" id="login" className="btn btn-color w-100"  onClick={this.toggle}>Вход</button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Введите данные</ModalHeader>
          <ModalBody>
            <LoginForm/>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ButtonLoginWithModalWindow;
