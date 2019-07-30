import { Selector } from 'interfaces';

export const getPathname: Selector<string> = ({ router: { location: { pathname } } }) => pathname;
