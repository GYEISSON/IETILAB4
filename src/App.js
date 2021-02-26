import logo from './logo.svg';
import React from 'react';
import {Login} from './components/Login';
import {TodoApp} from "./components/TodoApp";
import {DrawerLeft} from './components/DrawerLeft';
import './App.css';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          isLoggedIn: false   
      };
      this.handleIsLogin = this.handleIsLogin.bind(this);
  }

  handleIsLogin() {
      this.setState({
          isLoggedIn: true
      });
  }
  render() {

    const LoginView = () => (<Login login={this.handleIsLogin}/>);
    const DrawerView = () => (<DrawerLeft todo={<TodoApp/>}/>);

    return (
      <Router>
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <h1 className="App-title">TODO React App</h1>
          </header>

          <div>
              <Route exact path="/login" component={LoginView}/>
              <Route exact path="/todo" Component={DrawerView}/>
          </div>
      </div>
  </Router>
    );
  }

} 

export default App;