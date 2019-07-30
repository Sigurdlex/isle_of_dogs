import 'jest-styled-components';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Dispatch } from 'redux';

import { ORANGE, LIMEGREEN } from 'constants/colors';
import { DisplayedBreedsBreed } from '../DisplayedBreedsBreed';

const breed = 'cerberus';
const dispatch: Dispatch = jest.fn() as Dispatch;

afterEach(() => {
  cleanup();
});

test('<DisplayBreedsBreed /> render with emtpy initial redux state, and breed isn\'t mine', () => {
  const { getByText, container: { firstChild: container } } = render(
    <MemoryRouter>
      <DisplayedBreedsBreed breed={breed} mine={false} dispatch={dispatch} />
    </MemoryRouter>
  );
  const button: HTMLButtonElement = getByText('Add to favourites') as HTMLButtonElement;
  expect(button).toHaveStyleRule('background', ORANGE);
  expect(container).toMatchSnapshot();
});

test('<DisplayBreedsBreed /> render with emtpy initial redux state, and breed is mine', () => {
  const { getByText, container: { firstChild: container } } = render(
    <MemoryRouter>
      <DisplayedBreedsBreed breed={breed} mine dispatch={dispatch} />
    </MemoryRouter>
  );
  const button: HTMLButtonElement = getByText('Remove from favourites') as HTMLButtonElement;
  expect(button).toHaveStyleRule('background', LIMEGREEN);
  expect(container).toMatchSnapshot();
});
