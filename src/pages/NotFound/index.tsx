import { push } from 'connected-react-router';
import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';

import { Header, ArrowButton } from 'components';
import { ORANGE } from 'constants/colors';

interface NotFoundProps {
  dispatch: Dispatch;
}

export const NotFound = ({ dispatch }: NotFoundProps) => {
  const handleGoToMain = useCallback(() => dispatch(push('/')), []);
  return (
    <>
      <Header>
        <ArrowButton
          isLeft
          handleClick={handleGoToMain}
          color={ORANGE}
        >
          Back to list
        </ArrowButton>
      </Header>
      <Container color={ORANGE}>
        <ErrorH1>404 - page not found</ErrorH1>
      </Container>
    </>
  );
};

export default connect()(NotFound);

const Container = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  padding-top: 100px;
  height: 100vh;
  display: flex;
  min-width: 700px;
`;

const ErrorH1 = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin: auto;
  background: white;
  border-radius: 4px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .5);
  font-family: "Franklin Gothic Medium", "Franklin Gothic", "ITC Franklin Gothic", Arial, sans-serif;
  font-size: 3rem;
  padding: 0.5em;
`;
