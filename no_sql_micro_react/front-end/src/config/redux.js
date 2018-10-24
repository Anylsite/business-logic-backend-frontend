import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import thunk from 'redux-thunk';

import * as Pages from '../pages';

export const history = createHistory();
const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = {};

Object.keys(Pages).forEach((pageName) => {
  // configure reducers
  if (Pages[pageName].reducers) {
    rootReducer[pageName] = Pages[pageName].reducers;
  }
});

const enhancers = [];

const middleware = [
  thunk,
  routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-undef,no-underscore-dangle
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const persistedReducer = persistReducer(persistConfig, combineReducers(rootReducer));

const store = createStore(
  connectRouter(history)(persistedReducer),
  composedEnhancers,
);
export const persistor = persistStore(store);

export default store;
