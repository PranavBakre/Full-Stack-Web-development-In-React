import React from 'react';
import { Navbar, Container, Row, Col, NavbarBrand, Jumbotron, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap'
import {NavLink} from 'react-router-dom';
class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            isNavOpen:false
        };
        //this.toggleNav=this.toggleNav.bind(this);
    }

    toggleNav=() => {
        this.setState({isNavOpen:!this.state.isNavOpen});
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
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
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
            </React.Fragment>
        )
    }
}

export default Header;