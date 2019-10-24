import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import styled from 'styled-components';

import { changeMyBreeds } from 'actionCreators';
import { LIMEGREEN, ORANGE, ROYALBLUE } from 'constants/colors';
import { FilledButton } from 'components';

export interface DisplayedBreedsBreedProps {
  breed: string;
  mine: boolean;
  dispatch: Dispatch;
}

export const DisplayedBreedsBreed = (props: DisplayedBreedsBreedProps) => {
  const { breed, mine, dispatch } = props;
  const handleToggleClick = useCallback(() => dispatch(changeMyBreeds(breed)), [breed, dispatch]);
  return (
    <Container>
      <StyledLink to={`/breed/${breed}`}>{breed}</StyledLink>
      <FilledButton color={mine ? LIMEGREEN : ORANGE} handleClick={handleToggleClick}>
        {mine ? 'Remove from favourites' : 'Add to favourites'}
      </FilledButton>
    </Container>
  );
};

export default connect()(DisplayedBreedsBreed);

const Container = styled.div`
  padding: 0 3em;
  height: 3em;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 1em;
  background: white;
  position: relative;
  z-index: 1;
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 5px;
    background: ${ROYALBLUE};
  }
  &::before {
    left: 1em;
  }
  &::after {
    right: 1em;
  }
  &:first-child {
    margin-top: 1em;
  }
  & > button {
    width: 170px;
  }
`;

const StyledLink = styled(Link)`
  color: ${ROYALBLUE};
`;
