import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { Fade, Stagger } from 'react-animation-components';
function RenderLeader({ leader }) {
    return (
        <Media tag="li">
            <Media className="mt-1 mr-3" left top object src="/assets/images/alberto.png"></Media>
            <Media body>
                <Media heading>
                    {leader.name}
                </Media>
                <p>{leader.designation}</p>
                <p className="d-none d-sm-block">{leader.description}</p>
            </Media>
        </Media>
    )
}

function RenderLeaders({ isLoading, leaders, errorMsg }) {
    if (isLoading) {
        return (<Col>
            <Loading />
        </Col>)
    }
    else if (errorMsg) {
        return (
            <Col>
                <h4>{errorMsg}</h4>
            </Col>
        )
    }
    const renderedLeaders = leaders.map((leader) => {
        return (
            <Fade in>
                <RenderLeader leader={leader} />
            </Fade>
        );
    });
    return (
        <Col xs="12">
            <Media list>
                <Stagger in>
                    {renderedLeaders}
                </Stagger>
            </Media>
        </Col>
    )
}

function About(props) {



    return (
        <Container>
            <Row>
                <Breadcrumb className="col-12">
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>

            </Row>
            <Row>
                <Col xs="12">
                    <h3>About Us</h3>
                    <hr />
                </Col>
            </Row>
            <Row className="row-content">
                <Col xs="12" md="6">
                    <h2>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </Col>
                <Col xs="12" md="5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="row-content">
                <Col xs="12">
                    <h2>Corporate Leadership</h2>
                </Col>
                <RenderLeaders leaders={props.leaders}
                    isLoading={props.isLoading}
                    errorMsg={props.errorMsg} />
            </Row>
        </Container>
    );
}

export default About;    