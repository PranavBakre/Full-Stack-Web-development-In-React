import * as ActionTypes from './ActionTypes';


const initState={
    isLoading:true,
    errorMsg:null,
    dishes:[]
};

export const Dishes = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state,isLoading:false, errorMsg:null, dishes:action.payload}
        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading:true, errorMsg:null, dishes:[]}
        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading:false, errorMsg:action.payload, dishes:[]}
        default:
            return state;
    }
}