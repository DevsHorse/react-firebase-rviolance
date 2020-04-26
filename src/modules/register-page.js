import RegisterForm from './components/register/register-form';
import React, { Component }from 'react';
import fire from '../config/Fire-config';

class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirm: '',
      fireErrors: ''
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  register = e => {
    e.preventDefault();
    if (this.state.name !== 'admin-root') {
      this.setState({fireErrors: "You havn't access. Sorry! =)"});
      return;
    }
    if (this.state.password !== this.state.confirm) {
      this.setState({fireErrors: 'Different passwords!'});
    } else {

      this.userData = {
        name: this.state.name,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      };

      fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        let id = fire.auth().currentUser.uid;
        fire.database().ref('users/' + id).set(this.userData);
      })
      .catch(error => this.setState({fireErrors: error.message}));
    }
  }

  render() {
    let errorMessage = this.state.fireErrors ? (<div className="alert alert-danger text-center">{this.state.fireErrors}</div>) : null;

    return (
      <section className="register-page section">
        <div className="row align-items-center justify-content-center h-100">
          <div className="col-6 border border-secondary rounded bg-light p-3">
            <h1 className="text-dark text-center">Register</h1>
            {errorMessage}
            <RegisterForm handleChange={this.handleChange} register={this.register} state={this.state} />
          </div>
        </div>
      </section>
    );
  }
}

export default RegisterPage;