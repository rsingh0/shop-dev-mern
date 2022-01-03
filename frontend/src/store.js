// Redux Store

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './reducers/productReducers';

// List of reducers for Redux Store
const reducer = combineReducers({ productList: productListReducer });

// Redux Initial State
const initialState = {};
// Redux Middleware
const middleware = [thunk];

// Redux Store uses list of reducers, redux initial state, devtools for chrome redux devtool connection
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
