import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {configureStore, Action} from '@reduxjs/toolkit'
import {Provider} from 'react-redux';
import {ThunkAction} from 'redux-thunk'
import employeesSliceReducer, {EmployeesState} from './redux/employeesSlice'
import currentEmployeeSliceReducer, {CurrentEmployeeState} from './redux/currentEmployeeSlice'
// import rootReducer from './redux/reducers'
import {BrowserRouter as Router} from 'react-router-dom'

export type AppThunk = ThunkAction<void, EmployeesState, CurrentEmployeeState, Action<string>>;
const store = configureStore({reducer:{employeesStore: employeesSliceReducer, currentEmployeeStore: currentEmployeeSliceReducer}});

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

// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

