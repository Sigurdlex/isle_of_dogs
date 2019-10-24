import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { FilledButton } from '../FilledButton';

afterEach(cleanup);

const handleClick = jest.fn();
const CHILDREN = 'CHILDREN';
const COLOR = 'white';

test('<FilledButton />', () => {
  const { container } = render(
    <FilledButton handleClick={handleClick} color={COLOR}>
      {CHILDREN}
    </FilledButton>,
  );
  const element: HTMLButtonElement = container.firstChild as HTMLButtonElement;
  expect(element.textContent).toMatch(CHILDREN);
  fireEvent.click(element);
  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(element).toHaveStyleRule('border', `2px solid ${COLOR}`);
  expect(element).toHaveStyleRule('background', COLOR);
  expect(element).toMatchSnapshot();
});
