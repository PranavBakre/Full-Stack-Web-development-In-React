import React from 'react';
import {
    Navbar, Container, Row, Col,
    NavbarBrand, Jumbotron, Nav, NavItem, NavbarToggler, 
    Collapse, Modal, Button, ModalHeader, ModalBody,
    FormGroup, Form, Label, Input
} from 'reactstrap'
import { NavLink } from 'react-router-dom';
class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }

    toggleNav = () => {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }

    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }
    handleLogin=(event) => {
        event.preventDefault()
        this.toggleModal();
        alert("Username:"+this.username.value+"\nPassword:"+this.password.value+"\nRemember:"+this.remember.checked)
    }
    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <Container>
                        <NavbarBrand className="mr-auto" href="/" >
                            <img src="assets/images/logo.png" width="41" height="30" alt="Ristorante Con Fusion"></img>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto">
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span> Login
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <Jumbotron>
                    <Container>
                        <Row className="row-header">
                            <Col xs="12" sm="6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                innerRef={input => this.username=input}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                innerRef={input => this.password=input}></Input>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={input => this.remember=input}/>
                                    Remember Me
                                </Label>
                            </FormGroup>
                                <Button color="primary" type="submit">
                                    Login
                                </Button>
                                <Button className="ml-1"onClick={this.toggleModal}>Cancel</Button>
                            
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Header;