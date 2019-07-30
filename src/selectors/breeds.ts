import { createSelector } from 'reselect';

import { ORANGE, LIMEGREEN } from 'constants/colors';
import { Selector, Breed } from 'interfaces';

export const getFilter: Selector<string> = ({ breeds: { filter } }) => filter;
export const getDisplayedBreeds: Selector<Breed[]> = ({
  breeds: { displayedBreeds },
}) => displayedBreeds;
export const getSearch: Selector<string> = ({ breeds: { searchString } }) => searchString;

export const getBreeds = createSelector(
  getFilter, getDisplayedBreeds, getSearch,
  (filter, displayedBreeds, searchString) => {
    const breeds = filter === 'all' ? displayedBreeds : displayedBreeds.filter(breed => breed.mine);
    return breeds.filter(breed => breed.breed.includes(searchString));
  }
);
export const getColor = createSelector(
  getFilter,
  filter => (filter === 'all' ? ORANGE : LIMEGREEN)
);
