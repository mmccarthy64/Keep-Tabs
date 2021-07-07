import React, { Component } from 'react';
import axios from 'axios';
import Registration from './components/Auth/Registration';
import Login from './components/Auth/Login';

class Home extends Component {
    constructor(props){
        super(props)
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    }

    handleSuccessfulAuth(data){
        this.props.handleLogin(data)
        // console.log(this.props)
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h2>Status: {this.props.loggedInStatus}</h2>
                {/* <button onClick={() => this.props.handleLogoutSession()} >Logout</button> */}
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
            </div>
        );
    }
}

export default Home;