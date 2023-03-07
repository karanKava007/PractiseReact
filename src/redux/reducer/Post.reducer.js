
import * as ActionTypes from '../ActionTypes'
const initialState = {
    post: [],
    isLoading: false,
    error: null,
}
export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_METHODE:
            return {
                ...state,
                post:action.payload
            }
        case ActionTypes.ADD_METHODE:
            return{
                ...state , 
                post:state.post.concat(action.payload)
            }
        case ActionTypes.DELETE_METHODE:
            return{
                ...state , 
                post:state.post.filter((item)=>item.id !== action.payload)
            }
        default:
            return state
    }
}