import React, {Component} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './FAQ.module.css';
export default class FAQ extends Component{
    render(){
        return(
            <div className={styles.FAQ}>
            <Accordion>
            <Card bg="dark" text="white" border="light">
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Who is eligible to participate?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>You will need to be a current or prospective SUTD student to participate, but we can make exceptions, so do contact us if you do not fulfil the above criteria.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{backgroundColor:"#CCFF0000",color:"#AFAFAF"}} border="light">
              <Accordion.Toggle as={Card.Header} eventKey="1">
              What if I don’t have experience coding or with Google products/ platforms? D:
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Not to worry, we will be providing participants with resources, including a mentor who will guide you!</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card bg="dark" text="white" border="light">
              <Accordion.Toggle as={Card.Header} eventKey="2">
                What are Google Products/ Platforms?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>These include: Google Cloud Platform, Firebase, Flutter, Google Assistant, and many more(link)</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{backgroundColor:"#CCFF0000",color:"#AFAFAF"}} border="light">
              <Accordion.Toggle as={Card.Header} eventKey="3">
              How will the sessions be carried out?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>Workshops and sessions are currently planned to be virtual, however, they might be made live if the situation improves.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card bg="dark" text="white" border="light">
              <Accordion.Toggle as={Card.Header} eventKey="4">
              Is the programme free?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>Yes, this hackathon is completely free. Come down and have fun, you never know what your ideas might turn into!</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{backgroundColor:"#CCFF0000",color:"#AFAFAF"}} border="light">
              <Accordion.Toggle as={Card.Header} eventKey="5">
              How do we handle Intellectual Property (IP)?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>Please refer to the Terms and Conditions of the Competition with regards to IP.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card bg="dark" text="white" border="light">
              <Accordion.Toggle as={Card.Header} eventKey="6">
              When is the registration deadline? (???)
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body>Not to worry, we will be providing participants with resources, including a mentor who will guide you!</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{backgroundColor:"#CCFF0000",color:"#AFAFAF"}} border="light">
              <Accordion.Toggle as={Card.Header} eventKey="7">
              How do I know if my registration has been confirmed?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="7">
                <Card.Body>You would receive an email confirming your registration.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card bg="dark" text="white" border="light">
              <Accordion.Toggle as={Card.Header} eventKey="8">
              How will groups be formed if I opted to be put in a group?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="8">
                <Card.Body>Based on indicated interests and skill levels, we will manually allocate you to suitable groups. </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{backgroundColor:"#CCFF0000",color:"#AFAFAF"}} border="light">
              <Accordion.Toggle as={Card.Header} eventKey="9">
              Do I have to use a particular coding language?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="9">
                <Card.Body>Nope, but please do include a Google product/ platform if possible.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card bg="dark" text="white" border="light">
              <Accordion.Toggle as={Card.Header} eventKey="10">
              My questions can’t be found in the FAQs!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="10">
                <Card.Body>
                    <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion> 
            </div>
            
        );
    }
}