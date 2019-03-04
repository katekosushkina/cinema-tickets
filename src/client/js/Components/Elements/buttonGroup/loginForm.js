import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      passwordValue: '',
      checkboxChecked: false
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleEmailChange(event) {
    this.setState({emailValue: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({passwordValue: event.target.value});
  }

  handleCheckboxChange() {
    this.setState({checkboxChecked: !this.state.checkboxChecked});
  }

  login(event) {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    event.preventDefault();
    if (!this.state.emailValue || !this.state.passwordValue) {
      alert('Заполните поля!');
      return false;
    }
    if (reg.test(this.state.emailValue) === false) {
      alert('Введите корректный e-mail');
      return false;
    }
    return fetch('login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.emailValue,
        password: this.state.passwordValue
      })
    })
      .then((response) => {
        response.json().then(function (data) {
          if (data.message) {
            alert(data.message);
          }
          else {
            const person = data;
            console.log(person)
          }
        })
          .catch((err) => alert(err))
      })
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="text" name="email" id="email" placeholder="Введите email" onChange={this.handleEmailChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Введите пароль" onChange={this.handlePasswordChange}/>
        </FormGroup>
        <FormGroup className="row m-0 mt-1">
          <FormGroup check className="col">
            <Label check>
              <Input type="checkbox" onChange={this.handleCheckboxChange}/>{' '}
              Сохранить данные
            </Label>
          </FormGroup>
          <Button type="submit" className="btn btn-success col" onClick={this.login}>Войти</Button>
        </FormGroup>
      </Form>
    );
  }
}
