import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';

import {
  fetchAllBreeds,
  enterSearch,
  setBreedsFilter,
} from 'actionCreators';
import { ORANGE, LIMEGREEN } from 'constants/colors';
import { TextInput, SwitchButton, Spinner, Header } from 'components';
import { Breed, State } from 'interfaces';
import { getBreeds, getFilter, getSearch, getColor, getIsFetching } from 'selectors';
import DisplayedBreedsBreed from './DisplayedBreedsBreed';

interface DisplayedBreedsProps {
  displayedBreeds: Breed[];
  filter: string;
  color: string;
  dispatch: Dispatch;
  searchString: string;
  isFetching: boolean;
}

export const DisplayedBreeds = (props: DisplayedBreedsProps) => {
  const {
    displayedBreeds,
    filter,
    color,
    dispatch,
    searchString,
    isFetching,
  } = props;

  const handleChange = useCallback(
    ({ target: { value } }) => dispatch(enterSearch(value)),
    [dispatch],
  );
  const handleAllClick = useCallback(
    () => dispatch(setBreedsFilter('all')),
    [dispatch],
  );
  const handleMineClick = useCallback(
    () => dispatch(setBreedsFilter('mine')),
    [dispatch],
  );
  useEffect(
    () => {
      dispatch(fetchAllBreeds());
    },
    []
  );

  return (
    <>
      <Header>
        <TextInput
          placeholder="Search"
          handleChange={handleChange}
          value={searchString}
        />
        <SwitchButton
          isLeft={filter === 'all'}
          leftColor={ORANGE}
          leftContent="All"
          handleLeftClick={handleAllClick}
          rightColor={LIMEGREEN}
          rightContent="Mine"
          handleRightClick={handleMineClick}
        />
      </Header>
      <Container color={color}>
        {isFetching
          ? <Spinner color={color} />
          : displayedBreeds.map(({ breed, isShown, mine }) => isShown && (
            <DisplayedBreedsBreed
              breed={breed}
              key={breed}
              mine={mine}
            />
          ))
        }
      </Container>
    </>
  );
};

const mapStateToProps = (state: State) => ({
  displayedBreeds: getBreeds(state),
  filter: getFilter(state),
  searchString: getSearch(state),
  color: getColor(state),
  isFetching: getIsFetching(state),
});

export default connect(mapStateToProps)(DisplayedBreeds);

const Container = styled.div<{ color: string }>`
  min-width: 700px;
  position: relative;
  padding-top: 100px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${({ color }) => color};
`;
