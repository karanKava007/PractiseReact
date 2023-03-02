import * as ActionType from '../ActionTypes'
const initialState = {
    count: 0,
}
export const Counter = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.INCREMENT_REDUCER:
            return {
                ...state, count: state.count + 1,
            }
        case ActionType.DECREMENT_REDUCER:
            return {
                ...state, count: state.count - 1,
            }
        default:
            return state
    }
}