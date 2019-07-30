import { Store } from 'redux';
import { State } from 'interfaces';

export type MockReduxState = Partial<State>;

export interface RenderWithReduxOpts {
  initialState?: MockReduxState;
  store?: Store;
}
