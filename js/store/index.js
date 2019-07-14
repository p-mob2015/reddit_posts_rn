import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import appReducer from './reducers';
import appSaga from './sagas';

const appMiddleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(appMiddleware));
appMiddleware.run(appSaga);

export default store;
