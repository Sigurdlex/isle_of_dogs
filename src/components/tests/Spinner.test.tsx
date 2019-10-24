import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { Spinner } from '../Spinner';

afterEach(cleanup);

test('<Spinner />', () => {
  const { container } = render(<Spinner color="white" />);
  const element: HTMLElement = container.firstChild as HTMLElement;
  expect(element).toMatchSnapshot();
});
