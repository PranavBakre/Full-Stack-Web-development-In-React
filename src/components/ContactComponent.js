import React from 'react';
import { Container, Col, Row, ButtonGroup, Breadcrumb, BreadcrumbItem, Form, Button, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: ''
        }
    }


    handleInputChange=(event)=> {
        const target= event.target;
        const value=target.type ==='checkbox'? target.checked: target.value;
        const name=target.name;

        this.setState({[name]:value});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert("Current State is"+ JSON.stringify(this.state))
        
    }
    render() {
        return (
            <Container>
                <Row>
                    <Breadcrumb className="col-12">
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Contact Us
                    </BreadcrumbItem>
                    </Breadcrumb>
                </Row>
                <Row>
                    <Col xs="12">
                        <h4>Contact Us</h4>
                        <hr />
                    </Col>
                </Row>
                <Row className="row-content">
                    <Col xs="12">
                        <h3>Location Information</h3>
                    </Col>
                    <Col xs="12" sm="4" className="offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </Col>
                    <Col xs="12" sm="6" className="offset-sm-1">
                        <h5>Map of our Location</h5>
                    </Col>
                    <Col xs="12" sm="11" className="offset-sm-1">
                        <ButtonGroup role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </ButtonGroup>

                    </Col>
                </Row>
                <Row className="row-content">
                    <Col xs="12">
                        <h3>Send us your feedback</h3>
                    </Col>
                    <Col xs="12" md="9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md="2">First Name</Label>
                                <Col md="10">
                                    <Input onChange={this.handleInputChange} type="text" id="firstname" name="firstname" placeholder="First Name"
                                        value={this.state.firstname}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md="2">Last Name</Label>
                                <Col md="10">
                                    <Input onChange={this.handleInputChange} type="text" id="lastname" name="lastname" placeholder="Last Name"
                                        value={this.state.lastname}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md="2">Contact Tel.</Label>
                                <Col md="10">
                                    <Input onChange={this.handleInputChange} type="tel" id="telnum" name="telnum" placeholder="Tel. Number"
                                        value={this.state.telnum}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md="2">Email</Label>
                                <Col md="10">
                                    <Input onChange={this.handleInputChange} type="email" id="email" name="email" placeholder="Email"
                                        value={this.state.email}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6, offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input onChange={this.handleInputChange} type="checkbox" name="agree"
                                             checked={this.state.agree}>
                                                 
                                             </Input>
                                             {' '}
                                                 <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Input onChange={this.handleInputChange} type="select" name="contactType"
                                    value={this.state.contactType}>

                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="feedback" md="2">Your feedback</Label>
                                <Col md="10">
                                    <Input onChange={this.handleInputChange} type="textarea" id="message" name="message" row="12"
                                        value={this.state.message}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary">Send feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;