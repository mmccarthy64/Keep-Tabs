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
    this.handleLogoutSession = this.handleLogoutSession.bind(this)
  }

  checkLoginStatus(){
    axios.get('http://localhost:3001/logged_in', {
      withCredentials: true
    })
      .then(res => {
        console.log('Logged in?', res)
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
    console.log(this)
    this.setState({
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {}
    })
  }

  handleLogoutSession(){
    axios.delete('http://localhost:3001/logout', {
        withCredentials: true
    })
        .then(res => {
            this.handleLogout()
        })
        .catch(err => {
            console.log('Error:', err)
        })
}

  handleLogin(data){
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: data.user
    })
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
              handleLogoutSession={this.handleLogoutSession}
              loggedInStatus={this.state.loggedInStatus}/>
            )} />
            <Route
              exact
              path={'/dashboard'}
              render={props => (
                <Dashboard
                  {...props}
                  handleLogoutSession={this.handleLogoutSession}
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