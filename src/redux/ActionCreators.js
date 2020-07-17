import * as ActionTypes from './ActionTypes';
import { baseURL } from '../shared/baseUrl';




export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => dispatch => {
    const newComment = {
        dishId,
        rating,
        author,
        comment,
        date: new Date().toISOString()
    }
    fetch(baseURL + "comments", {
        method: "post",
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': "application/json"
        },
        credentials: 'same-origin'

    }).then(response => {
        if (response.ok) {
            return response;
        }
        else {
            let error = new Error("Error: " + response.status + " " + response.statusText);
            error.response = response;
            throw error;
        }
    },
        reject => {
            let error = new Error(reject.message);
            throw error
        })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log("Post Comment: " + error.message);
            alert("Your comment could not be posted\n\nError:" + error.message);
        })
}

export const fetchDishes = () => dispatch => {
    dispatch(dishesLoading(true));
    fetch(baseURL + "dishes")//try with return
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                let error = new Error("Error: " + response.status + " " + response.statusText);
                error.response = response;
                throw error;
            }
        },
            reject => {
                let error = new Error(reject.message);
                throw error
            })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => {
            dispatch(dishesFailed(error.message))
        });

}
export const fetchComments = () => dispatch => {
    fetch(baseURL + "comments")//try with return
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                let error = new Error("Error: " + response.status + " " + response.statusText);
                error.response = response;
                throw error;
            }
        },
            reject => {
                let error = new Error(reject.message);
                throw error
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => {
            dispatch(commentsFailed(error.message))
        });

}


export const dishesLoading = (/*payload*/) => ({
    type: ActionTypes.DISHES_LOADING,
    // payload:payload
})

export const dishesFailed = (errorMsg) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errorMsg
})


export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})
export const commentsFailed = (errorMsg) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errorMsg
})


export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

export const fetchPromos = () => dispatch => {
    dispatch(promosLoading(true));
    fetch(baseURL + "promotions")//try with return      
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                let error = new Error("Error: " + response.status + " " + response.statusText);
                error.response = response;
                throw error;
            }
        }, reject => {
            let error = new Error(reject.message);
            throw error
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => {
            dispatch(promosFailed(error.message))
        });
}


export const promosLoading = (/*payload*/) => ({
    type: ActionTypes.PROMOS_LOADING,
    // payload:payload
})

export const promosFailed = (errorMsg) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errorMsg
})

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
})


export const leaderLoading = () => ({
    type: ActionTypes.LEADER_LOADING
})

export const leaderFailed = (errorMsg) => ({
    type: ActionTypes.LEADER_FAILED,
    payload: errorMsg
})

export const addLeader = leaders => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
})

export const fetchLeaders = () => dispatch => {
    dispatch(leaderLoading());
    fetch(baseURL + "leaders")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                let error = new Error("Error:" + response.status + " " + response.statusText);
                error.response = response;
                throw error;
            }
        },
        reject => {
            let error = new Error(reject.message);
            throw error
        }).then(leaders => {
            dispatch(addLeader(leaders));
        }).catch(error => {
            dispatch(leaderFailed(error.message))
        });
}


export const postFeedback = (feedback) => dispatch => {
    fetch(baseURL + "feedback", {
        method: "post",
        body: JSON.stringify(feedback),
        headers: {
            'Content-Type': "application/json"
        },
        credentials: 'same-origin'

    }).then(response => {
        if (response.ok) {
            return response.json()
        } else {
            let error =new Error("Error:" + response.status + " " + response.statusText);
            throw error;
        }
    }, reject => {
        let error = new Error(reject.message);
        throw error;
    }).then(feedback => {
        alert(JSON.stringify(feedback));
        //dispatch(addFeeback(feedback))
    })
    .catch(error => {
        console.log(error.message)
    })
}
export const addFeeback=(feedback)=>({
    type:ActionTypes.ADD_FEEDBACK,
    payload: feedback
})

export const failedFeedback=(errorMsg) => ({
    type:ActionTypes.FAILED_FEEBACK,
    payload:errorMsg
})