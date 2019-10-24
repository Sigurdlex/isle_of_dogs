import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface SwitchButtonProps {
  handleLeftClick: () => void;
  leftColor: string;
  leftContent: ReactNode;
  handleRightClick: () => void;
  rightColor: string;
  rightContent: ReactNode;
  isLeft: boolean;
}
interface ButtonProps {
  color: string;
  left?: boolean;
}

export const SwitchButton = ({
  handleLeftClick,
  leftColor,
  leftContent,
  handleRightClick,
  rightColor,
  rightContent,
  isLeft,
}: SwitchButtonProps) => (
  <div>
    <Button
      onClick={handleLeftClick}
      color={leftColor}
      left
      disabled={isLeft}
      data-testid="left-button"
    >
      {leftContent}
    </Button>
    <Button
      onClick={handleRightClick}
      color={rightColor}
      disabled={!isLeft}
      data-testid="right-button"
    >
      {rightContent}
    </Button>
  </div>
);

const Button = styled.button<ButtonProps>`
  background: #e5e5e5;
  color: rgba(0, 0, 0, 0.5);
  font-size: inherit;
  padding: ${({ left }) => (left ? '.5em 1em .5em 2em' : '.5em 2em .5em 1em')};
  width: 120px;
  border: none;
  border-radius: ${({ left }) => (left ? '1em 0 0 1em' : '0 1em 1em 0')};
  position: relative;
  transition: 0.2s all;
  transform-origin: ${({ left }) => (left ? '100%' : 0)} 50%;
  &:disabled {
    background: white;
    color: black;
    cursor: default;
    transform: scale(1.05);
  }
  &::before {
    width: 6px;
    height: 100%;
    ${({ left }) => (left ? 'left' : 'right')}: 1em;
    position: absolute;
    background: ${({ color }) => color};
    content: '';
    top: 0;
  }
`;
