import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {createStore, applyMiddleware} from 'redux';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './redux/reducers'
import {BrowserRouter as Router} from 'react-router-dom'

const store = configureStore({reducer:rootReducer, middleware:  [logger, thunk ]});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
    <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();