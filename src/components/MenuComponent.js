import React from 'react';
import {
    Container, Row, Col,
    Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom'
import {Loading} from './LoadingComponent';
import {baseURL} from'../shared/baseUrl';
function Menu(props) {
    const menu = props.dishes.dishes.map(
        dish => {
            return (
                <Col key={dish.id} xs="12" md="5" className="m-1">
                    <Card >
                        <Link to={`/menu/${dish.id}`}>
                            <CardImg witdh="100%" src={baseURL+dish.image} alt={dish.name} />
                            <CardImgOverlay >
                                <CardTitle className="font-weight-bold">{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Link>
                    </Card>
                </Col>
            )
        }
    );
    if (props.dishes.isLoading) {
        return (
            <Container>
                <Row>
                    <Loading />
                </Row>
            </Container>
        )
    }
    else if (props.dishes.errorMsg) {
        return (
            <Container>
                <Row>
                    <h4>{props.dishes.errorMsg}</h4>
                </Row>
            </Container>
        )
    }
    else {
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
    };
}


export default Menu;