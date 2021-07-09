import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';

class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            password_confirmation: '',
            registrationErrors: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        axios.post('http://localhost:3001/registrations', {
            user: {
                username: this.state.username,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            }
        }, {
            withCredentials: true
        })
            .then(res => {
                if (res.data.status === 'created'){
                    this.props.handleSuccessfulAuth(res.data)
                } else {
                    alert('Username is taken, choose another')
                }
            })
            .catch(error => {
                console.log('Error:', error)
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
                    <Card.Title><h2>Signup</h2></Card.Title>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group as={Row}>
                            <Form.Label column sm={5}>Username:</Form.Label>
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
                            <Form.Label column sm={5}>Password:</Form.Label>
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
                        <Form.Group as={Row}>
                            <Form.Label column sm={5}>Password Confirmation:</Form.Label>
                            <Col>
                                <input 
                                type='password'
                                name='password_confirmation' 
                                placeholder='Password confirmation' 
                                value={this.state.password_confirmation} 
                                onChange={this.handleChange}
                                required />
                            </Col>
                        </Form.Group>
                        <Button type='submit'>Signup</Button>
                    </Form>
                </Card>
        );
    }
}

export default Registration;