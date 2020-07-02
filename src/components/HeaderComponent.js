import React from 'react';
import { Navbar, Container, Row, Col, NavbarBrand, Jumbotron } from 'reactstrap'

class Header extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Navbar dark>
                    <Container>
                        <NavbarBrand href="/" >Ristorante Con Fusion</NavbarBrand>
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