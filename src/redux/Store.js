import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import { rootReducer } from './reducer';
export const configStore = () => {
    const store = createStore(
        //Reducer...
        rootReducer, applyMiddleware(thunk)
    );
    return store;
}