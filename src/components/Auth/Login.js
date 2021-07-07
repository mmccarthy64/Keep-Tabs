import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            loginErrors: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        axios.post('http://localhost:3001/sessions', {
            user: {
                username: this.state.username,
                password: this.state.password,
            }
        }, {
            withCredentials: true
        })
            .then(res => {
                console.log('response from login',res)
                if (res.data.logged_in){
                    this.props.handleSuccessfulAuth(res.data)
                } else {
                    alert('Wrong username/password combo! Try again.')
                    console.log('Error')
                }
            })
            .catch(error => {
                console.log('login error', error)
            })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input 
                        type='text'
                        name='username' 
                        placeholder='Username' 
                        value={this.state.username} 
                        onChange={this.handleChange}
                        required />
                    <input 
                        type='password'
                        name='password' 
                        placeholder='Password' 
                        value={this.state.password} 
                        onChange={this.handleChange}
                        required />
                    <button type='submit'>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;