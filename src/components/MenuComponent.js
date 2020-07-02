import React from 'react';
import {
    Container, Row, Col,
    Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom'
function Menu(props) {
    const menu = props.dishes.map(
        dish => {
            return (
                <Col key={dish.id} xs="12" md="5" className="m-1">
                    <Card >
                        <Link to={`/menu/${dish.id}`}>
                            <CardImg witdh="100%" src={dish.image} alt={dish.name} />
                            <CardImgOverlay >
                                <CardTitle className="font-weight-bold">{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Link>
                    </Card>
                </Col>
            )
        }
    );

    return (
        <Container>
            <Row>
                <Breadcrumb className="col-12">
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Menu
                    </BreadcrumbItem>
                </Breadcrumb>
            </Row>
            <Row>
                <Col xs="12">
                    <h4>Menu</h4>
                    <hr />
                </Col>
            </Row>
            <Row>
                {menu}
            </Row>
        </Container>
    );
}


export default Menu;