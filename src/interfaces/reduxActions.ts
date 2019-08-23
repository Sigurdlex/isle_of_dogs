import { Breed } from 'interfaces';
import * as T from 'constants/actionTypes';

export interface FetchAllBreeds {
  type: typeof T.FETCH_ALL_BREEDS;
}
export interface FetchSingleBreeds {
  type: typeof T.FETCH_SINGLE_BREED;
  breed: string;
}
export interface SetDisplayedBreeds {
  type: typeof T.SET_DISPLAYED_BREEDS;
  displayedBreeds: Breed[];
}
export interface ChangeMyBreeds {
  type: typeof T.CHANGE_MY_BREEDS;
  breed: string;
}
export interface SetBreedsFilter {
  type: typeof T.SET_BREEDS_FILTER;
  filter: 'mine' | 'all';
}
export interface EnterSearch {
  type: typeof T.ENTER_SEARCH;
  searchString: string;
}
export interface SetIsFetching {
  type: typeof T.SET_IS_FETCHING;
  isFetching: boolean;
}
export interface SetImages {
  type: typeof T.SET_IMAGES;
  images: string[];
}

export type BreedsReduxAction = SetDisplayedBreeds | ChangeMyBreeds | SetBreedsFilter | EnterSearch;
export type BreedReduxAction = SetImages;
export type FetchingReduxAction = SetIsFetching;
