import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import moviesReducer from './reducers/moviesReducer';


const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  moviesData : moviesReducer
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;