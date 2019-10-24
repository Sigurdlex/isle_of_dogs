import React from 'react';
import styled from 'styled-components';

interface SpinnerProps {
  color: string;
}

export const Spinner = ({ color }: SpinnerProps) => <Container color={color} />;

const Container = styled.div`
  color: #ffffff;
  font-size: 11px;
  margin: 55px auto;
  top: 50%;
  left: 50%;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  transform: translate(-50%, -50%);

  &,
  &::before,
  &::after {
    border-radius: 50%;
    position: absolute;
  }

  &::before,
  &::after {
    content: '';
    background: ${({ color }: SpinnerProps) => color};
    width: 5.2em;
    height: 10.2em;
  }

  &::before {
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    transform-origin: 5.2em 5.1em;
    animation: load2 2s infinite ease 1.5s;
  }

  &::after {
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 5.1em;
    transform-origin: 0 5.1em;
    animation: load2 2s infinite ease;
  }

  @keyframes load2 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
