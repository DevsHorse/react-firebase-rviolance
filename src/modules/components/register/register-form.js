import React from 'react';
import { useHistory } from 'react-router-dom';

const RegisterForm = props => {

  let history = useHistory();

  return (
    <form>
      <div className="col-11">

          <div className="row justify-content-between">
              <div className="col ml-3">
                <div className="form-group">
                  <label className="text-dark font-size-18" htmlFor="register-name-input">First name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    id="register-name-input"
                    onChange={props.handleChange}
                    name="name"
                    value={props.state.name} />
                </div>
              </div>
              <div className="col ml-4">
                <div className="form-group">
                  <label className="text-dark font-size-18" htmlFor="register-last-name-input">Last name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    id="register-last-name-input"
                    onChange={props.handleChange}
                    name="lastName"
                    value={props.state.lastName}/>
                </div>
              </div>
          </div>

          <div className="row justify-content-center">
            <div className="col ml-3">
              <div className="form-group">
                  <label className="text-dark font-size-18" htmlFor="register-email-input">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="register-email-input"
                    placeholder="Enter email"
                    onChange={props.handleChange}
                    name="email"
                    value={props.state.email}/>
              </div>
            </div>
          </div>
        
          <div className="row justify-content-between">
              <div className="col mb-4 ml-3">
                <div className="form-group">
                  <label className="text-dark font-size-18" htmlFor="register-password-input">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="register-password-input"
                    placeholder="Password"
                    onChange={props.handleChange}
                    name="password"
                    value={props.state.password}/>
                </div>
              </div>
              <div className="col mb-4 ml-4">
                <div className="form-group">
                  <label className="text-dark font-size-18" htmlFor="register-confirm-input">Confirm password:</label>
                  <input
                    type="password" 
                    className="form-control" 
                    id="register-confirm-input" 
                    placeholder="Password" 
                    onChange={props.handleChange} 
                    name="confirm" 
                    value={props.state.confirm}/>
                </div>
              </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-5">
              <input
                type="submit"
                className="btn btn-dark mb-2 ml-3 btn-block"
                value='Register'
                onClick={props.register} />
            </div>
            <div className="col-5">
              <button
                className="btn btn-secondary mb-2 ml-3 btn-block"
                onClick={() => history.push('/login')}>Log in instead</button>
            </div>
          </div>

      </div>
    </form>
  );
};

export default RegisterForm;