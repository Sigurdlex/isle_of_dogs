import { RouterState } from 'connected-react-router';

export interface Breed {
  breed: string;
  mine: boolean;
}

export interface BreedState {
  images: string[];
}

export interface BreedsState {
  displayedBreeds: Breed[];
  filter: string;
  searchString: string;
}

export interface FetchingState {
  isFetching: boolean;
}

export interface State {
  breed: BreedState;
  breeds: BreedsState;
  fetching: FetchingState;
  router: RouterState;
}
