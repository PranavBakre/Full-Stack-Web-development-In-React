import React from 'react';
import { Container, Col, Row, ButtonGroup, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Contact(props) {
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
        </Container>
    );
}

export default Contact;