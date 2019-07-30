import { SET_IMAGES } from 'constants/actionTypes';
import { BreedState, BreedReduxAction } from 'interfaces';

const initialState: BreedState = {
  images: [],
};

export const breed = (state = initialState, action: BreedReduxAction): BreedState => {
  switch (action.type) {
    case SET_IMAGES:
      return { ...state, images: action.images };

    default: return state;
  }
};
