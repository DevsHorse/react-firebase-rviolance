import React from 'react';
import { useHistory } from 'react-router-dom';


const LoginForm = props => {

  let history = useHistory();

  return (
    <form>
      <div className="form-group">
        <label className="text-dark font-size-18" htmlFor="login-email-input">Email:</label>
        <input
          type="email"
          className="form-control"
          id="login-email-input"
          placeholder="Enter email"
          name="email"
          value={props.state.email}
          onChange={props.handleChange} />
      </div>
      <div className="form-group mb-4">
        <label className="text-dark font-size-18" htmlFor="login-password-input">Password:</label>
        <input
          type="password"
          className="form-control"
          id="login-password-input"
          placeholder="Password"
          name="password"
          value={props.state.password}
          onChange={props.handleChange} />
      </div>
      <div className="row align-items-center">
        <input
          type='submit'
          className="btn btn-dark mb-2 ml-3"
          value="login"
          onClick={props.login} />
        <button
          className="btn btn-secondary mb-2 ml-3"
          onClick={() => history.push('/register')}>Register</button>
      </div>
    </form>
  );
};
    
export default LoginForm;