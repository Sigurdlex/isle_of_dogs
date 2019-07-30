import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { ArrowButton } from '../ArrowButton';

afterEach(cleanup);

const handleClick = jest.fn();
const CHILDREN = 'CHILDREN';

test('<ArrowButton /> left', () => {
  const { container } = render(
    <ArrowButton handleClick={handleClick} color='white' isLeft>
      {CHILDREN}
    </ArrowButton>
  );
  const element: HTMLButtonElement = container.firstChild as HTMLButtonElement;
  expect(element.textContent).toMatch(CHILDREN);
  fireEvent.click(element);
  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(element).toHaveStyleRule('padding', '.5em 1em .5em 2em');
  expect(element).toHaveStyleRule('border-radius', '1em 0 0 1em');
  expect(element).toMatchSnapshot();
});

test('<ArrowButton /> right', () => {
  const { container: { firstChild: container } } = render(
    <ArrowButton handleClick={handleClick} color='white'>
      {CHILDREN}
    </ArrowButton>
  );
  expect(container).toHaveStyleRule('padding', '.5em 2em .5em 1em');
  expect(container).toHaveStyleRule('border-radius', '0 1em 1em 0');
  expect(container).toMatchSnapshot();
});
