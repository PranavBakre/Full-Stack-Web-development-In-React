import React from 'react';
import {
    Card, CardImg, CardBody, CardTitle, CardText,
    Container, Row, Col
} from 'reactstrap'

class DishDetail extends React.Component {
    render() {
        const dish = this.props.dish[0];
        if (dish != null) {
            const comments = dish.comments.map(
                comment => {
                    return (
                        <div key={comment.id} className="m-2">
                            <div>
                                {comment.comment}
                            </div>
                            <div className="mt-1">
                                -- {comment.author}, {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(Date.parse(comment.date))}
                            </div>
                        </div>
                    );
                }
            )
            return (
                <Container>
                    <Row>

                        <Col xs="12" md="5" className="m-1">
                            <Card>
                                <CardImg witdh="100%" src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle><b>{dish.name}</b></CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" md="5" className="mt-1">
                            <h4>Comments</h4>
                            <div>
                                {comments}
                            </div>
                        </Col>


                    </Row>
                </Container>
            )
        }
        else {
            return (
                <div>
                </div>
            )
        }
    }
}

export default DishDetail;