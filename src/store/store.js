import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
import { constants } from '../containers/Weather';

const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware),
);


const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: [constants.NAME],
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);


const store = createStore(
  persistedReducer,
  enhancer,
);

const persistor = persistStore(store);


export {
  store,
  persistor,
};
