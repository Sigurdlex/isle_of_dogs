import { Selector } from 'interfaces';

export const getIsFetching: Selector<boolean> = ({ fetching: { isFetching } }) => isFetching;
