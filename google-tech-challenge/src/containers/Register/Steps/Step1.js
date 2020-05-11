import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import './Steps.css';
export default class Step1 extends Component{
    

    render(){
        return <div className="Step">
            <Form onChange={this.props.handleChange}>
            <Form.Label>Name</Form.Label>
            <Form.Group as={Col} controlId="formGridName">
                <Form.Control  type="text"  placeholder="Enter your name" />
            </Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control  type="email"  placeholder="Enter your email" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPhoneNum">
            <Form.Label>Phone Number</Form.Label>
                <Form.Control  type="tel" placeholder="Enter your phone number" />
            </Form.Group>
            <Button variant="outline-light" onClick={this.props.handleSubmit}>
                Next
            </Button>
        </Form>
        
        </div>
    }
}