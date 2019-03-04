import React from 'react';
import {
  Link
} from 'react-router-dom';

class buttonRegister extends React.Component {

  render() {
    return (
      <Link to="/order" className="button-width-50">
        <button type="button" id="registr" className="btn btn-color w-100">Регистрация</button>
      </Link>
    )
  }
}
export default buttonRegister;
