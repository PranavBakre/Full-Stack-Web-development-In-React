import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Dishes } from './dishes';
import {Comments } from './comments';
import {Promotions } from './promotions';
import {Leaders} from './leaders';
import Thunk from 'redux-thunk';
import Logger from 'redux-logger';

export const ConfigureStore= () => {
    const store= createStore(
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            promotions:Promotions,
            leaders:Leaders}),
            applyMiddleware(Thunk,Logger)
        
    )
    return store
}