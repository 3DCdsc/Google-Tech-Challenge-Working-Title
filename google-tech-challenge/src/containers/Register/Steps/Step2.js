import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './Steps.css';
export default class Step2 extends Component{
    
    render(){
        return(
        <div className="Step">
        <Form onChange={this.props.handleChange}>   
            <Form.Group as={Col} controlId="formGridGetOut">
                <Form.Label>What do you want to get out of this event</Form.Label>
                <Form.Control as="textarea" row="3" placeholder="Enter your answer here" />
            </Form.Group>
               
            <Form.Group as={Col} controlId="formGridResources">
                <Form.Label>ideas / solution if any (optional) (+needed resources)</Form.Label>
            <Form.Control as="textarea" row="3" placeholder="Enter your answer here" />
            </Form.Group>
            <Button className="buttonRegis" variant="outline-light" onClick={this.props.handleBack}>
                Back
            </Button>
            <Button className="buttonRegis" variant="outline-light" onClick={this.props.handleSubmit}>
                Next
            </Button>
           
        </Form>
        </div> 
        )
    }
}