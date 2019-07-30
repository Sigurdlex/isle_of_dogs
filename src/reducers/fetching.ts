import { SET_IS_FETCHING } from 'constants/actionTypes';
import { FetchingState, SetIsFetching } from 'interfaces';

const initialState: FetchingState = {
  isFetching: false,
};

export const fetching = (state = initialState, action: SetIsFetching): FetchingState => {
  switch (action.type) {
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    default: return state;
  }
};
