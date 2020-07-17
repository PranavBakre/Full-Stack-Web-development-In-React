import * as ActionTypes from './ActionTypes';

const initState= {
    comments:[],
    errorMsg: null
}

export const Comments = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = state.comments.length;
            comment.date=new Date().toISOString();
            return {...state,comments:state.comments.concat(comment)};
            case ActionTypes.ADD_COMMENTS:
                return {...state,isLoading:false, errorMsg:null, comments:action.payload}
            case ActionTypes.COMMENTS_FAILED:
                return {...state, isLoading:false, errorMsg:action.payload, comments:[]}
            
        default:
            return state;
    }
}