import { LEADERS } from '../shared/leaders';
import * as ActionTypes from './ActionTypes';
const initState = {
    leaders:[],
    isLoading:true,
    errorMsg:null
}

export const Leaders = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return {...state, leaders:action.payload, isLoading:false, errorMsg:null}
        case ActionTypes.LEADER_FAILED:
            return {...state, leaders:[], isLoading:false, errorMsg: action.payload}
        case ActionTypes.LEADER_LOADING:
            return {...state, leaders:[],isLoading:true, errorMsg:null}
        default:
            return state;
    }
}