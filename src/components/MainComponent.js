import React from 'react';
import { Navbar, Container, NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId })
    }


    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <Container>
                        <NavbarBrand href="/" >Ristorante Con Fusion</NavbarBrand>
                    </Container>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter(dish  => dish.id===this.state.selectedDish)} />
            </div>
        );
    }
}

export default Main;
