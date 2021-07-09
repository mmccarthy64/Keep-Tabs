import React, { Component } from 'react';
import axios from 'axios';
import { Card, Form, Button, Col, Row } from 'react-bootstrap';

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
                <Card style={{ color: '#000000'}}>
                    <Card.Title><h2>Login</h2></Card.Title>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group as={Row}>
                            <Form.Label column sm={5}>Username</Form.Label>
                            <Col>
                                <input 
                                    type='text'
                                    name='username' 
                                    placeholder='Username' 
                                    value={this.state.username} 
                                    onChange={this.handleChange}
                                    required />
                                    </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={5}>Password</Form.Label>
                            <Col>
                                <input 
                                    type='password'
                                    name='password' 
                                    placeholder='Password' 
                                    value={this.state.password} 
                                    onChange={this.handleChange}
                                    required />
                                    </Col>
                        </Form.Group>
                        <Button type='submit'>Login</Button>
                    </Form>
                </Card>
        );
    }
}

export default Login;