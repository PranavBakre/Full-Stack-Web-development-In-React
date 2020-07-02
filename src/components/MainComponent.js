import React from 'react';
import Header from './HeaderComponent'
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import Contact from './ContactComponent';

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments:COMMENTS,
            promotions:PROMOTIONS,
            leaders:LEADERS
            // selectedDish: null
        };
    }

    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId });
    // }


    render() {
        const HomePage = ()=>{

            return (
                <Home dish={this.state.dishes.filter(dish=> dish.featured===true)[0]}
                    promotion={this.state.promotions.filter(promo=> promo.featured===true)[0]}
                    leader={this.state.leaders.filter(leader=> leader.featured===true)[0]}/>
            )
        }
        const DishWithId = ({match}) => {
            return (
                <DishDetail dish={this.state.dishes.filter(dish => dish.id===parseInt(match.params.dishId,10))[0]}
                            comments={this.state.comments.filter(comment => comment.dishId===parseInt(match.params.dishId,10))}
                />
            );
        }
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/contactus" component={Contact}/>
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
                    <Route path="/menu/:dishId" component={DishWithId}/>
                    <Redirect to="/home"/>
                </Switch>
                {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
                {/* <DishDetail dish={this.state.dishes.filter(dish  => dish.id===this.state.selectedDish)} /> */}
                <Footer/>
            </div>
        );
    }
}

export default Main;
