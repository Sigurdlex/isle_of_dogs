import {
  SET_DISPLAYED_BREEDS,
  CHANGE_MY_BREEDS,
  SET_BREEDS_FILTER,
  ENTER_SEARCH,
} from 'constants/actionTypes';
import { BreedsState, BreedsReduxAction } from 'interfaces';

const initialState: BreedsState = {
  displayedBreeds: [],
  filter: 'all',
  searchString: '',
};

export const breeds = (state = initialState, action: BreedsReduxAction): BreedsState => {
  switch (action.type) {
    case SET_DISPLAYED_BREEDS:
      return { ...state, displayedBreeds: action.displayedBreeds };

    case CHANGE_MY_BREEDS: {
      const { breed } = action;
      const { displayedBreeds } = state;
      const index = displayedBreeds.findIndex(el => el.breed === breed);
      const newBreeds = [
        ...displayedBreeds.slice(0, index),
        { ...displayedBreeds[index], mine: !displayedBreeds[index].mine },
        ...displayedBreeds.slice(index + 1),
      ];
      return { ...state, displayedBreeds: newBreeds };
    }

    case SET_BREEDS_FILTER:
      return { ...state, filter: action.filter };

    case ENTER_SEARCH:
      return { ...state, searchString: action.searchString };

    default: return state;
  }
};
