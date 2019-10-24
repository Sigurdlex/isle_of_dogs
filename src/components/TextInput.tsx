import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface InputProps {
  placeholder: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const TextInput = ({ placeholder = '', handleChange, value }: InputProps) => (
  <StyledInput value={value} onChange={handleChange} placeholder={placeholder} />
);

const StyledInput = styled.input`
  font-size: 1rem;
  padding: 0.25em 1em;
  border-radius: 0.75em;
  border: none;
`;
