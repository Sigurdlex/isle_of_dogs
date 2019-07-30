import { State } from 'interfaces';

export interface Selector<T> {
  (state: State): T;
}
