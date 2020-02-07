import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { rootSaga } from './modules';

import { auth } from './modules/auth';
import { setUser } from './modules/auth';

function loadUser(){
  try{
    const user = localStorage.getItem('user');
    if(!user) return;

    store.dispatch(setUser(user));
  }catch(e){
    console.log('localStorage is not working');
  }
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, 
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  ));

  sagaMiddleware.run(rootSaga);
  loadUser();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
);

