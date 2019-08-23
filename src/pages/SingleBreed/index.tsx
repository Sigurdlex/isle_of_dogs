import { push } from 'connected-react-router';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useTransition, animated } from 'react-spring';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';

import { getImages, getPathname } from 'selectors';
import { setImages, fetchSingleBreeds } from 'actionCreators';
import { LIGHTGRAY } from 'constants/colors';
import { Header, ArrowButton, Spinner } from 'components';
import { State } from 'interfaces';

interface SingleBreedProps {
  images: string[];
  dispatch: Dispatch;
  pathname: string;
}

const SingleBreed = (props: SingleBreedProps) => {
  const {
    images,
    dispatch,
    pathname,
  } = props;
  const [imageNum, setImageNum] = useState(0);
  const handleBackClick = useCallback(() => dispatch(push('/')), []);
  const handleNextClick = useCallback(
    () => setImageNum(state => (
      state < images.length - 1 ? state + 1 : 0
    )),
    [setImageNum, images]
  );
  const handlePrevClick = useCallback(
    () => setImageNum(state => (
      state > 0 ? state - 1 : images.length - 1
    )),
    [setImageNum, images]
  );
  const breed = useMemo(() => pathname.match(/\w+$/), [pathname]);
  useEffect(
    () => {
      if (Array.isArray(breed)) dispatch(fetchSingleBreeds(breed[0]));
      return () => {
        dispatch(setImages([]));
      };
    },
    [breed],
  );
  const transitions = useTransition(imageNum, k => k, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      <Header>
        <ArrowButton
          isLeft
          color={LIGHTGRAY}
          handleClick={handleBackClick}
        >
          Back to list
        </ArrowButton>
        <NameH1>{breed}</NameH1>
      </Header>
      <Container>
        {!images.length
          ? <Spinner color={LIGHTGRAY} />
          : (
            <>
              <ArrowButton
                isLeft
                color={LIGHTGRAY}
                handleClick={handlePrevClick}
              >
                Previous
              </ArrowButton>
              {transitions.map(({ item, props: style, key }) => (
                <Image
                  src={images[item]}
                  style={style}
                  key={key}
                />
              ))}
              <ArrowButton
                color={LIGHTGRAY}
                handleClick={handleNextClick}
              >
                Next
              </ArrowButton>
            </>
          )
        }
      </Container>
    </>
  );
};

const mapStateToProps = (state: State) => ({
  pathname: getPathname(state),
  images: getImages(state),
});

export default connect(mapStateToProps)(SingleBreed);

const Container = styled.div`
  padding: 100px 10vw 0;
  background: ${LIGHTGRAY};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 700px;
  & > button {
    width: 140px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }
`;

const Image = styled(animated.img)`
  border: 10px solid white;
  border-radius: 4px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  max-width: calc(80vw - 350px);
  max-height: calc((100% - 100px) * .75);
  min-width: 260px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, calc(-50% + 50px), 0);
`;

const NameH1 = styled.h1`
  font-family: "Brush Script MT", cursive;
  font-size: 3rem;
  margin: 0;
  text-transform: capitalize;
`;
