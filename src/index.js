import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {  Provider} from 'react-redux';
import {  createStore,applyMiddleware,compose,combineReducers} from 'redux';
import thunk from 'redux-thunk';

import ReviewDetailsReducer from './ReduxStore/Reducers/ReviewDetailsReducer'

import TeasersReducer from './ReduxStore/Reducers/TeasersReducer'
import TrailersReducer from './ReduxStore/Reducers/TrailersReducer'

import DefaultReducer from './ReduxStore/Reducers/DefaultReducer'
import DefaultDetailsReducer from './ReduxStore/Reducers/DefaultDetailsReducer'



const rootReducer=combineReducers({
  ReviewDetailsData:ReviewDetailsReducer,
  TeasersData:TeasersReducer,
  TrailersData:TrailersReducer,
  DefaultData:DefaultReducer,
  DefaultDetailsData:DefaultDetailsReducer
})


const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)) )

ReactDOM.render(
  <Provider store={store}>

    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
