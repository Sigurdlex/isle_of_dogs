import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { Header } from '../Header';

afterEach(cleanup);

const CHILDREN = 'CHILDREN';

test('<Header />', () => {
  const { container } = render(<Header>{CHILDREN}</Header>);
  const element: HTMLElement = container.firstChild as HTMLElement;
  expect(element.textContent).toMatch(CHILDREN);
  expect(element).toMatchSnapshot();
});
