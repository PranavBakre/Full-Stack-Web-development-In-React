import React from 'react';
import Header from './HeaderComponent'
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import Footer from './FooterComponent';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }


    render() {
        return (
            <div className="App">
                <Header/>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter(dish  => dish.id===this.state.selectedDish)} />
                <Footer/>
            </div>
        );
    }
}

export default Main;
