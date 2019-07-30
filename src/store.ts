import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducers } from 'reducers';
import { rootSaga } from 'sagas';

export const history = createBrowserHistory();

export const configureStore = (initialState = {}): Store => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancers = [applyMiddleware(sagaMiddleware, routerMiddleware(history))];
  const store = createStore(
    reducers(history),
    initialState,
    composeWithDevTools(...enhancers)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
