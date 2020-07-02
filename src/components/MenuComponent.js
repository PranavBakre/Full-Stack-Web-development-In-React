import React from 'react';
import {
    Container, Row, Col,
    Card, CardImg, CardImgOverlay, CardTitle
} from 'reactstrap';

function Menu(props) {
        const menu = props.dishes.map(
            dish => {
                return (
                    <Col key={dish.id} xs="12" md="5" className="m-1">
                        <Card onClick={() => props.onClick(dish.id)}>
                            <CardImg witdh="100%" src={dish.image} alt={dish.name} />
                            <CardImgOverlay >
                                <CardTitle className="font-weight-bold">{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                )
            }
        );

        return (
            <Container>
                <Row>
                    {menu}
                </Row>
            </Container>
        );
    }


export default Menu;