import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Loading } from './LoadingComponent';
import {baseURL} from'../shared/baseUrl';
function RenderCard({item,isLoading,errorMsg}) {
    if(isLoading) {
        return (
            <Loading/>
        )
    }
    else if (errorMsg) {
        return (
            <h4>{errorMsg}</h4>
        )
    }
    else {
    return(
        <Card>
            <CardImg src={baseURL+item.image} alt={item.name} />
            <CardBody>
            <CardTitle><h5>{item.name}</h5></CardTitle>
            {item.designation ? <CardSubtitle><h6>{item.designation}</h6></CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
    };
}

function Home (props) {
    return (
            <Container>
                <Row className="align-items-stretch">
                    <Col xs="12" md className="m-1">
                        <RenderCard item={props.dish} 
                        isLoading={props.dishesLoading}
                        errorMsg={props.dishesErrorMsg}/>
                    </Col>
                    <Col xs="12" md className="m-1">
                        <RenderCard item={props.promotion}
                        isLoading={props.promosLoading}
                        errorMsg={props.promosErrorMsg}/>
                    </Col>
                    <Col xs="12" md className="m-1">
                        <RenderCard item={props.leader}/>
                    </Col>
                </Row>
            </Container>
        )
}

export default Home;