import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { SwitchButton } from '../SwitchButton';

const handleLeftClick = jest.fn();
const handleRightClick = jest.fn();
const leftContent = 'leftContent';
const rightContent = 'rightContent';
const leftColor = 'red';
const rightColor = 'green';

afterEach(() => {
  cleanup();
  handleLeftClick.mockClear();
  handleRightClick.mockClear();
});

test('<SwitchButton /> left', () => {
  const { getByTestId, container } = render(
    <SwitchButton
      handleLeftClick={handleLeftClick}
      leftColor={leftColor}
      leftContent={leftContent}
      handleRightClick={handleRightClick}
      rightColor={rightColor}
      rightContent={rightContent}
      isLeft
    />
  );
  const element = container.firstChild as HTMLElement;
  const leftButton: HTMLButtonElement = getByTestId('left-button') as HTMLButtonElement;
  const rightButton: HTMLButtonElement = getByTestId('right-button') as HTMLButtonElement;
  expect(leftButton.disabled).toBeTruthy();
  expect(rightButton.disabled).toBeFalsy();
  fireEvent.click(rightButton);
  expect(handleRightClick).toHaveBeenCalledTimes(1);
  fireEvent.click(leftButton);
  expect(handleLeftClick).toHaveBeenCalledTimes(0);
  expect(leftButton.textContent).toMatch(leftContent);
  expect(leftButton).toHaveStyleRule('padding', '.5em 1em .5em 2em');
  expect(leftButton).toHaveStyleRule('border-radius', '1em 0 0 1em');
  expect(leftButton).toHaveStyleRule('transform-origin', '100% 50%');
  expect(handleRightClick).toHaveBeenCalledTimes(1);
  expect(rightButton.textContent).toMatch(rightContent);
  expect(rightButton).toHaveStyleRule('padding', '.5em 2em .5em 1em');
  expect(rightButton).toHaveStyleRule('border-radius', '0 1em 1em 0');
  expect(rightButton).toHaveStyleRule('transform-origin', '0 50%');
  expect(element).toMatchSnapshot();
});

test('<SwitchButton /> right', () => {
  const { getByTestId, container: { firstChild: container } } = render(
    <SwitchButton
      handleLeftClick={handleLeftClick}
      leftColor={leftColor}
      leftContent={leftContent}
      handleRightClick={handleRightClick}
      rightColor={rightColor}
      rightContent={rightContent}
      isLeft={false}
    />
  );
  const leftButton: HTMLButtonElement = getByTestId('left-button') as HTMLButtonElement;
  const rightButton: HTMLButtonElement = getByTestId('right-button') as HTMLButtonElement;
  expect(leftButton.disabled).toBeFalsy();
  expect(rightButton.disabled).toBeTruthy();
  fireEvent.click(rightButton);
  expect(handleRightClick).toHaveBeenCalledTimes(0);
  fireEvent.click(leftButton);
  expect(handleLeftClick).toHaveBeenCalledTimes(1);
  expect(container).toMatchSnapshot();
});
