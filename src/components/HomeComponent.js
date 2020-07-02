import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

function RenderCard({item}) {

    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle><h5>{item.name}</h5></CardTitle>
            {item.designation ? <CardSubtitle><h6>{item.designation}</h6></CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home (props) {
    return (
            <Container>
                <Row className="align-items-stretch">
                    <Col xs="12" md className="m-1">
                        <RenderCard item={props.dish}/>
                    </Col>
                    <Col xs="12" md className="m-1">
                        <RenderCard item={props.promotion}/>
                    </Col>
                    <Col xs="12" md className="m-1">
                        <RenderCard item={props.leader}/>
                    </Col>
                </Row>
            </Container>
        )
}

export default Home;