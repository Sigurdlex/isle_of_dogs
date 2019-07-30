import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ArrowButtonProps {
  children: ReactNode;
  handleClick: () => void;
  color: string;
  isLeft?: boolean;
}
type ContainerProps = Pick<ArrowButtonProps, 'color' | 'isLeft'>;

export const ArrowButton = (
  { children, handleClick, color, isLeft = false }: ArrowButtonProps
) => (
  <Container
    isLeft={isLeft}
    onClick={handleClick}
    color={color}
  >
    {children}
  </Container>
);

const Container = styled.button<ContainerProps>`
  border: none;
  font-size: 1rem;
  padding: ${({ isLeft }) => (isLeft ? '.5em 1em .5em 2em' : '.5em 2em .5em 1em')};
  background: white;
  border-radius: ${({ isLeft }) => (isLeft ? '1em 0 0 1em' : '0 1em 1em 0')};
  position: relative;
  &:before {
    position: absolute;
    content: '';
    height: 100%;
    top: 0;
    ${({ isLeft }) => (isLeft ? 'left' : 'right')}: 1em;
    width: 5px;
    background: ${({ color }) => color};
  }
`;
