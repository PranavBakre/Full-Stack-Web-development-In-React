import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

export const initState={
    dishes: DISHES,
    comments:COMMENTS,
    promotions:PROMOTIONS,
    leaders:LEADERS
}


export const Reducer = (prevState=initState,action) => {
    switch(action) {
        default:
            return prevState
    }
}