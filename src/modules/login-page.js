import LoginForm from './components/login/login-form';
import React, { Component }from 'react';
import fire from '../config/Fire-config';



class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fireErrors: ''
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }  

  login = e => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => this.setState({fireErrors: error.message}));
  }

  render() {

    let errorMessage = this.state.fireErrors ?
      (<div className="alert alert-danger">{this.state.fireErrors}</div>) : null;

    return (
      <section className="login-page section">
        <div className="row align-items-center justify-content-center h-100">
          <div className="col-6 border border-secondary rounded bg-light p-3">
            <h1 className="text-dark text-center">Login</h1>
            {errorMessage}
            <LoginForm handleChange={this.handleChange} login={this.login} state={this.state}/>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginPage;