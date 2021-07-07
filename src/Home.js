import React, { Component } from 'react';
import axios from 'axios';
import Registration from './components/Auth/Registration';
import Login from './components/Auth/Login';

class Home extends Component {
    constructor(props){
        super(props)
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }

    handleSuccessfulAuth(data){
        this.props.handleLogin(data)
        // console.log(this.props)
        this.props.history.push('/dashboard')
    }

    handleLogoutClick(){
        axios.delete('http://localhost:3001/logout', {
            withCredentials: true
        })
            .then(res => {
                this.props.handleLogout()
            })
            .catch(err => {
                console.log('Error:', err)
            })
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h2>Status: {this.props.loggedInStatus}</h2>
                <button onClick={() => this.handleLogoutClick()} >Logout</button>
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
            </div>
        );
    }
}

export default Home;