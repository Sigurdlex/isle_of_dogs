import axios from 'axios';
import { runSaga, SagaIterator } from 'redux-saga';
import { Action } from 'redux';

import {
  FETCH_ALL_BREEDS,
  SET_IS_FETCHING,
  SET_DISPLAYED_BREEDS,
  FETCH_SINGLE_BREED,
  SET_IMAGES,
} from 'constants/actionTypes';
import { FetchAllBreeds, FetchSingleBreeds } from 'interfaces';
import { fetchAllBreedsSaga, fetchSingleBreedSaga } from '..';

jest.mock('axios');

const mockedGet = axios.get as typeof axios.get & { mockReturnValue: (arg: {}) => void };

export const recordSaga = async <A>(
  saga: (arg1: A) => SagaIterator<void>,
  initialAction: A,
): Promise<Action[]> => {
  const dispatched: Action[] = [];
  await runSaga(
    {
      dispatch: (action: Action): number => dispatched.push(action),
    },
    saga,
    initialAction,
  );
  return dispatched;
};

afterEach(() => jest.resetAllMocks());

test('fetchAllBreedsSaga', async () => {
  const breed = 'cerberus';
  const mockedResponse = { [breed]: breed };
  mockedGet.mockReturnValue({ data: { message: mockedResponse } });
  const dispatched = await recordSaga<FetchAllBreeds>(fetchAllBreedsSaga, {
    type: FETCH_ALL_BREEDS,
  });
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(dispatched).toHaveLength(3);
  expect(dispatched[0]).toEqual({ type: SET_IS_FETCHING, isFetching: true });
  expect(dispatched[1]).toEqual({
    type: SET_DISPLAYED_BREEDS,
    displayedBreeds: [{ breed, mine: false }],
  });
  expect(dispatched[2]).toEqual({ type: SET_IS_FETCHING, isFetching: false });
});

test('fetchSingleBreedSaga', async () => {
  const breed = 'cerberus';
  mockedGet.mockReturnValue({ data: { message: [breed] } });
  const dispatched = await recordSaga<FetchSingleBreeds>(fetchSingleBreedSaga, {
    type: FETCH_SINGLE_BREED,
    breed,
  });
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(dispatched).toHaveLength(3);
  expect(dispatched[0]).toEqual({ type: SET_IS_FETCHING, isFetching: true });
  expect(dispatched[1]).toEqual({ type: SET_IMAGES, images: [breed] });
  expect(dispatched[2]).toEqual({ type: SET_IS_FETCHING, isFetching: false });
});
