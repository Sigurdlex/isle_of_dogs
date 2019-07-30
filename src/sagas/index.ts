import axios from 'axios';
import { all, takeEvery, call, put } from 'redux-saga/effects';

import { setDisplayedBreeds, setIsFetching, setImages } from 'actionCreators';
import { FETCH_ALL_BREEDS, FETCH_SINGLE_BREED } from 'constants/actionTypes';
import { API_URL, ALL_BREEDS_ENDP, SINGLE_BREED_ENDP } from 'constants/api';
import { FetchSingleBreeds } from 'interfaces';

export function* fetchAllBreedsSaga() {
  try {
    yield put(setIsFetching(true));
    const { data: { message } } = yield call(axios.get, `${API_URL}${ALL_BREEDS_ENDP}`);
    const breeds = Object.keys(message).map(breed => ({
      breed,
      isShown: true,
      mine: false,
    }));
    yield all([
      put(setDisplayedBreeds(breeds)),
      put(setIsFetching(false)),
    ]);
  } catch (e) {
    console.error(e);
  }
}

export function* fetchSingleBreedSaga(action: FetchSingleBreeds) {
  try {
    yield put(setIsFetching(true));
    const { data: { message } } = yield call(axios.get, `${API_URL}${SINGLE_BREED_ENDP(action.breed)}`);
    yield all([
      put(setImages(message)),
      put(setIsFetching(false)),
    ]);
  } catch (e) {
    console.error(e);
  }
}

export function* rootSaga() {
  yield all([
    takeEvery(FETCH_ALL_BREEDS, fetchAllBreedsSaga),
    takeEvery(FETCH_SINGLE_BREED, fetchSingleBreedSaga),
  ]);
}
