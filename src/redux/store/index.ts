import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-thunk'

import rootReducer from '../reducers/index';

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export type AppState = ReturnType<typeof rootReducer>;
export default store;