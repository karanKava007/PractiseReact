import * as ActionTypes from '../ActionTypes';
export const increment = () => (dispatch) => {
    dispatch({
        type: ActionTypes.INCREMENT_REDUCER,
        payload: 0,
    });
}
export const decrement = () => (dispatch) => {
    dispatch({
        type: ActionTypes.DECREMENT_REDUCER,
        payload: 0,
    });
}