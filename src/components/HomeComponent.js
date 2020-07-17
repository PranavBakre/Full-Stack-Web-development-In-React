import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Loading } from './LoadingComponent';
import {baseURL} from'../shared/baseUrl';
import {FadeTransform} from 'react-animation-components';

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
        <FadeTransform in
        transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
        <Card>
            <CardImg src={baseURL+item.image} alt={item.name} />
            <CardBody>
            <CardTitle><h5>{item.name}</h5></CardTitle>
            {item.designation ? <CardSubtitle><h6>{item.designation}</h6></CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
        </FadeTransform>
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
                        <RenderCard item={props.leader}
                        isLoading={props.leaderLoading}
                        errorMsg={props.leaderErrorMsg}/>
                    </Col>
                </Row>
            </Container>
        )
}

export default Home;