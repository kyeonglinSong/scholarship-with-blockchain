import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'draft-js/dist/Draft.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';

import { setUser } from './modules/auth';

function loadUser(){
  try{
    const user = localStorage.getItem('user');
    if(!user) return;
    const tempuser = JSON.parse(user);
    store.dispatch(setUser(tempuser));
  }catch(e){
    console.log('localStorage is not working');
  }
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, 
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  ));

  loadUser();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
);

