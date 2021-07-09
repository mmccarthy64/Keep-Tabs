import React, { Component } from 'react';
import Registration from './components/Auth/Registration';
import Login from './components/Auth/Login';
import { Container, Col, Row } from 'react-bootstrap';

class Home extends Component {
    constructor(props){
        super(props)
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    }

    handleSuccessfulAuth(data){
        this.props.handleLogin(data)
        this.props.history.push('/library')
    }

    render() {
        return (
            <Container className='App-header'>
                <Row>
                    <h1 style={{marginBottom: '50px'}}>Keep Tabs</h1>
                    <h2 style={{marginBottom: '50px'}}>Login or Signup to Continue</h2>
                    <Col>
                        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
                    </Col>
                    <Col>
                        <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;