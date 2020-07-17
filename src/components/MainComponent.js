import React from 'react';
import Header from './HeaderComponent'
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Contact from './ContactComponent';
import { connect } from 'react-redux';
import About from './AboutComponent';
import { fetchDishes, fetchComments, fetchPromos, postComment } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
    }

    render() {
        const HomePage = () => {

            return (
                <Home dish={this.props.dishes.dishes.filter(dish => dish.featured === true)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrorMsg={this.props.dishes.errorMsg}
                    promotion={this.props.promotions.promotions.filter(promo => promo.featured === true)[0]}
                    promosLoading={this.props.promotions.isLoading}
                    promosErrorMsg={this.props.promotions.errorMsg}
                    leader={this.props.leaders.filter(leader => leader.featured === true)[0]} />
            )
        }
        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.props.dishes.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errorMsg={this.props.dishes.errorMsg}
                    comments={this.props.comments.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))}
                    commentsErrorMsg={this.props.comments.errorMsg}
                    postComment={this.props.postComment}
                />
            );
        }
        return (
            <div className="App">
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout="3000">
                        <Switch>
                            <Route path="/home" component={HomePage} />
                            <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                            <Route path="/menu/:dishId" component={DishWithId} />
                            <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>

                <Footer />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchDishes: () => { dispatch(fetchDishes()) },
    fetchComments: () => { dispatch(fetchComments()) },
    fetchPromos: () => { dispatch(fetchPromos()) },
    postComment: (dishId, rating, author, comment) => { dispatch(postComment(dishId, rating, author, comment)) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
