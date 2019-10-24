import { createSelector } from 'reselect';

import { ORANGE, LIMEGREEN } from 'constants/colors';
import { Selector, Breed } from 'interfaces';

export const getFilter: Selector<string> = ({ breeds: { filter } }) => filter;
export const getDisplayedBreeds: Selector<Breed[]> = ({ breeds: { displayedBreeds } }) =>
  displayedBreeds;
export const getSearch: Selector<string> = ({ breeds: { searchString } }) => searchString;

export const getBreeds = createSelector(
  getFilter,
  getDisplayedBreeds,
  getSearch,
  (filter, displayedBreeds, searchString) =>
    displayedBreeds.filter(({ breed, mine }) => {
      const isSearched = breed.includes(searchString);
      const isFilteredIn = filter === 'all' || mine;
      return isSearched && isFilteredIn;
    }),
);
export const getColor = createSelector(
  getFilter,
  filter => (filter === 'all' ? ORANGE : LIMEGREEN),
);
