import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-thunk'

import rootReducer from '../reducers/index';
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(logger, thunk)));

export type AppState = ReturnType<typeof rootReducer>;
export default store;