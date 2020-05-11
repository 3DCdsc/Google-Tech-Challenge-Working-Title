import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default class Step3 extends Component{
    

    render(){
        let singleOrGroup = null;
        let textToShow = null;

        if(this.props.formGridTypeSetting){
            if(this.props.formGridTypeSetting === "Single"){
                textToShow = "What are your skills/interests";
            }else{
                textToShow = "Please enter the names of your friends you intend to join with"
            }
            singleOrGroup = <Form.Group as={Col} controlId="formGridTypeResponse">
                <Form.Label>{textToShow}</Form.Label>
            <Form.Control as="textarea" row="3" placeholder="Enter your answer here" />
            </Form.Group>
        }
        
        return(
        <div className="Step">
        <Form onChange={this.props.handleChange}>                
            <Form.Group as={Col} controlId="formGridParType" required>
            <Form.Label>Please list any skills/interests you want to list for grouping</Form.Label>
                <ToggleButtonGroup type='radio' name="formGridTypeSetting" >
                    <ToggleButton className="buttonRegis" value={'Single'}>Single</ToggleButton>
                    <ToggleButton className="buttonRegis" value={'Group'}>Group</ToggleButton>
                </ToggleButtonGroup>
            </Form.Group>
            {singleOrGroup}
            <Button variant="outline-light" onClick={this.props.handleSubmit}>
                Next
            </Button>
        </Form>
        </div> 
        )
    }
}