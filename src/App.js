import React, { Component } from 'react';
import Dashboard from './Dashboard';
import {
    Route,
    Switch,
    BrowserRouter,
  } from "react-router-dom";
import Home from './Home';
import axios from 'axios';

class App extends Component{
  constructor() {
    super()
    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  checkLoginStatus(){
    axios.get('http://localhost:3001/logged_in', {
      withCredentials: true
    })
      .then(res => {
        if (res.data.logged_in && this.state.loggedInStatus === 'NOT_LOGGED_IN'){
          this.setState({
            loggedInStatus: 'LOGGED_IN',
            user: res.data.user
          })
        } else if (!res.data.logged_in && this.state.loggedInStatus === 'LOGGED_IN') {
          this.setState({
            loggedInStatus: 'NOT_LOGGED_IN',
            user: {}
          })
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    this.checkLoginStatus()
  }

  handleLogout(){
    this.setState({
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {}
    })
  }

  handleLogin(data){
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: data.user
    })
    console.log(data)
  }

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
            exact
            path={'/'}
            render={props => (
              <Home
              {...props}
              handleLogin={this.handleLogin}
              handleLogout={this.handleLogout}
              loggedInStatus={this.state.loggedInStatus}/>
            )} />
            <Route
              exact
              path={'/dashboard'}
              render={props => (
                <Dashboard
                  {...props}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus} />
              )} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;