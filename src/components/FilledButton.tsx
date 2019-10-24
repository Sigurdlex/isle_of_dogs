import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface FilledButtonProps {
  children: ReactNode;
  handleClick: () => void;
  color: string;
}
type ContainerProps = Pick<FilledButtonProps, 'color'>;

export const FilledButton = ({ children, handleClick, color }: FilledButtonProps) => (
  <Container onClick={handleClick} color={color}>
    {children}
  </Container>
);

const Container = styled.button<ContainerProps>`
  color: white;
  font-weight: bold;
  border: ${({ color }) => `2px solid ${color}`};
  background: ${({ color }) => color};
  border-radius: 4px;
  height: 2em;
  transition: all 0.2s;
  &:hover {
    color: ${({ color }) => color};
    background: transparent;
  }
`;
