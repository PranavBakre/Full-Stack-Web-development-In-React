import React from 'react';
import { Container, Col, Row, ButtonGroup, Breadcrumb, BreadcrumbItem, Button, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (value) => {
        
        alert("Current State is"+ JSON.stringify(value))
        
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
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md="2">First Name</Label>
                                <Col md="10">
                                    <Control.text model=".firstname" className="form-control"
                                        id="firstname" name="firstname" placeholder="First Name"
                                        ></Control.text>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md="2">Last Name</Label>
                                <Col md="10">
                                    <Control.text model=".lastname" className="form-control"  id="lastname" name="lastname" placeholder="Last Name"
                                        ></Control.text>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md="2">Contact Tel.</Label>
                                <Col md="10">
                                    <Control.text type="tel" className="form-control" model=".telnum"  id="telnum" name="telnum" placeholder="Tel. Number"
                                       ></Control.text>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md="2">Email</Label>
                                <Col md="10">
                                    <Control.text model=".email" className="form-control"  type="email" id="email" name="email" placeholder="Email"
                                        ></Control.text>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6, offset:2}}>
                                    <div className="form-check" >
                                        <Label check>
                                            <Control.checkbox model=".agree"  name="agree"
                                            className="form-check-input"
                                             >
                                                 
                                             </Control.checkbox>
                                             {' '}
                                                 <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Control.select model=".contactType" className="form-control" name="contactType"
                                    >

                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="feedback" md="2">Your feedback</Label>
                                <Col md="10">
                                    <Control.textarea className="form-control" model=".message"  id="message" name="message" row="12"
                                        ></Control.textarea>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary">Send feedback</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;