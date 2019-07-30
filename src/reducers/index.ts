import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { History } from 'history';

import { fetching } from './fetching';
import { breed } from './breed';
import { breeds } from './breeds';

export const reducers = (history: History) => combineReducers({
  breeds,
  breed,
  fetching,
  router: connectRouter(history),
});
