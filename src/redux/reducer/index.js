import { combineReducers } from "redux";
import { Counter } from "./Counter.reducer";
import { postReducer } from "./Post.reducer";

export const rootReducer = combineReducers({
    counterDigit:Counter,
    getPost : postReducer , 
});