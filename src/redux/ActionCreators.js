import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import {baseURL} from '../shared/baseUrl';
export const addComment = (dishId,rating,author,comment) => ({
        type:ActionTypes.ADD_COMMENT,
        payload: {
            dishId,
            rating,
            author,
            comment
        }
    });

    export const fetchDishes = () => dispatch => {
        dispatch(dishesLoading(true));
        fetch(baseURL+"dishes")//try with return
            .then(response=>response.json())
            .then(dishes => dispatch(addDishes(dishes)));

    }
    export const fetchComments = () => dispatch => {
        fetch(baseURL+"comments")//try with return
            .then(response=>response.json())
            .then(comments => dispatch(addComments(comments)));

    }


    export const dishesLoading = (/*payload*/) => ({
        type:ActionTypes.DISHES_LOADING,
        // payload:payload
    })

    export const dishesFailed = (errorMsg) => ({
        type:ActionTypes.DISHES_FAILED,
        payload:errorMsg
    })


    export const addDishes = (dishes) => ({
        type:ActionTypes.ADD_DISHES,
        payload:dishes
    })
    export const commentsFailed = (errorMsg) => ({
        type:ActionTypes.COMMENTS_FAILED,
        payload:errorMsg
    })


    export const addComments = (comments) => ({
        type:ActionTypes.ADD_COMMENTS,
        payload:comments
    })

    export const fetchPromos = () => dispatch => {
        dispatch(promosLoading(true));
        fetch(baseURL+"promotions")//try with return
            .then(response=>response.json())
            .then(promos => dispatch(addPromos(promos)));

    }

    
    export const promosLoading = (/*payload*/) => ({
        type:ActionTypes.PROMOS_LOADING,
        // payload:payload
    })

    export const promosFailed = (errorMsg) => ({
        type:ActionTypes.PROMOS_FAILED,
        payload:errorMsg
    })

    export const addPromos = (promos) => ({
        type:ActionTypes.ADD_PROMOS,
        payload:promos
    })