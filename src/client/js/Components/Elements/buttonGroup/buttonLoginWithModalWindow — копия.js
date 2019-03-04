import React from 'react';

class ButtonLoginWithModalWindow extends React.Component {

  render() {
    return (
      <div className="button-width-50">
        <button type="button" id="login" className="btn btn-color w-100" data-toggle="modal" data-target="#login">Вход</button>
        <div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Введите данные</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="mb-2">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Email"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                  </div>
                  <div className="form-group row m-0">
                    <div className="form-check col">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                      <label className="form-check-label" htmlFor="exampleCheck1">Сохранить данные</label>
                    </div>
                    <button type="button" className="btn btn-success col">Войти</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ButtonLoginWithModalWindow;
