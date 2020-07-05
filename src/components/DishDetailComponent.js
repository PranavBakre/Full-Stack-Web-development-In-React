import React from 'react';
import {
    Card, CardImg, CardBody, CardTitle, CardText,
    Container, Row, Col, Breadcrumb, BreadcrumbItem, Label, Button, Modal, ModalHeader, ModalBody,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = val => val && val.length;
const minLength = len => val => val && val.length >= len;
const maxLength = len => val => !val || val.length < len;



class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
    }

    handleSubmit = (value) => {
        console.log(JSON.stringify(value));
        alert(`Rating:${value.ratings}\nAuthor:${value.author}\nComment:${value.comment}`);
    }
    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <Button outline onClick={this.toggleModal}><span className="fa fa-pencil"></span> Submit Comment</Button>
                    </Col>
                </Row>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Submit Comment
                </ModalHeader>
                    <ModalBody>
                        <Container>
                            <LocalForm onSubmit={value => this.handleSubmit(value)}>
                                <Row className="form-group">
                                    <Label htmlFor="rating" md="2">
                                        Rating
                                </Label>
                                    <Col xs="12" md="10">
                                        <Control.select id="rating" name="ratings" model=".ratings" className="form-control"
                                            validators={{ required }}>
                                            <option selected disabled>Select Rating</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </Control.select>
                                        <Errors model=".ratings" className="text-danger" show="touched" messages={{ required: "Required" }}
                                            wrapper="ul" component="li"
                                        ></Errors>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="author" md="2">
                                        Your Name
                                </Label>
                                    <Col xs="12" md="10">
                                        <Control.text id="author" name="author" model=".author"
                                            className="form-control"
                                            validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
                                        <Errors className="text-danger" model=".author"
                                            wrapper="ul"
                                            component="li"
                                            show="touched"
                                            messages={{
                                                required: "Required",
                                                minLength: `Length should be greater than 2`,
                                                maxLength: `Length should be less than 15`
                                            }}>

                                        </Errors>
                                    </Col>

                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="comment" xs="12" md="2">
                                        Comment
                                </Label>
                                    <Col xs="12" md="10">
                                        <Control.textarea name="comment" id="comment" model=".comment"
                                            className="form-control"
                                            rows="12">
                                        </Control.textarea>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md="10">
                                        <Button color="primary" type="submit">Submit</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </Container>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

function DishDetail(props) {
    const dish = props.dish;
    if (dish != null) {
        const comments = props.comments.map(
            comment => {
                return (
                    <div key={comment.id} className="m-2">
                        <div>
                            {comment.comment}
                        </div>
                        <div className="mt-1">
                            -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(Date.parse(comment.date))}
                        </div>
                    </div>
                );
            }
        );
        return (
            <>
                <Container>
                    <Row>
                        <Breadcrumb className="col-12">
                            <BreadcrumbItem>
                                <Link to="/home">Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link to="/menu">Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                {props.dish.name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <h4>{props.dish.name}</h4>
                            <hr />
                        </Col>
                    </Row>
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
                            <CommentForm />
                        </Col>


                    </Row>

                </Container>
                <Container>
                    <Row>

                    </Row>
                </Container>
            </>
        );
    }
    else {
        return (
            <div>
            </div>
        );
    }
}

export default DishDetail;