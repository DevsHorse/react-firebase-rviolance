import fire from './config/Fire-config';
import LoginPage from './modules/login-page';
import TodoPage from './modules/todo-page';
import RegisterPage from './modules/register-page';
import Success from './modules/success-page';
import EditPage from './modules/edit-page';
import EditOrCreatePage from './modules/editOrCreate-page';


import React, { Component }from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({user, userId: user.uid});
      }
      else this.setState({user: null});
    });
  }


  render() {

    return (
      <div>
        <Router history={history} basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/">
              {this.state.user ? <Redirect to="/home" /> : <Redirect to="/login" />}
            </Route>

            <Route path='/login'>
              {this.state.user ? <Redirect to="/home" /> : (<LoginPage />)}
            </Route>

            <Route exact path='/register'>
              {this.state.user ? <Redirect to="/register/success" /> : (<RegisterPage />)}
            </Route>

            <Route path='/home'>
              {this.state.user ? (<TodoPage userId={this.state.userId}/>) : <Redirect to="/login" />}
            </Route>

            <Route path='/edit' >
              <EditPage userId={this.state.userId}/>
            </Route>

            <Route path='/edit-or-create' component={EditOrCreatePage} />

            <Route path='/register/success' component={Success} />
          </Switch>
        </Router>
      </div>
    );
  }
};

export default App;
