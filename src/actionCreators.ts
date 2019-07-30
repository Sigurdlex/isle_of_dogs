import * as T from 'constants/actionTypes';
import * as I from 'interfaces';

export const fetchAllBreeds = (): I.FetchAllBreeds => ({
  type: T.FETCH_ALL_BREEDS,
});

export const fetchSingleBreeds = (breed: string): I.FetchSingleBreeds => ({
  type: T.FETCH_SINGLE_BREED,
  breed,
});

export const setDisplayedBreeds = (displayedBreeds: I.Breed[]): I.SetDisplayedBreeds => ({
  type: T.SET_DISPLAYED_BREEDS,
  displayedBreeds,
});

export const changeMyBreeds = (breed: string): I.ChangeMyBreeds => ({
  type: T.CHANGE_MY_BREEDS,
  breed,
});

export const setBreedsFilter = (filter: 'mine' | 'all'): I.SetBreedsFilter => ({
  type: T.SET_BREEDS_FILTER,
  filter,
});

export const enterSearch = (searchString: string): I.EnterSearch => ({
  type: T.ENTER_SEARCH,
  searchString,
});

export const setIsFetching = (isFetching: boolean): I.SetIsFetching => ({
  type: T.SET_IS_FETCHING,
  isFetching,
});

export const setImages = (images: string[]): I.SetImages => ({
  type: T.SET_IMAGES,
  images,
});
