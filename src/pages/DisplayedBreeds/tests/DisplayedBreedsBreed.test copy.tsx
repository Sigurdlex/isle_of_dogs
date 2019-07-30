// import 'jest-styled-components';
// import React from 'react';
// import { render, cleanup, RenderResult } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { MemoryRouter } from 'react-router-dom';
// import { Store } from 'redux';

// import { ORANGE, LIMEGREEN } from 'constants/colors';
// import { RenderWithReduxOpts, Breed, MockReduxState } from 'interfaces';
// import { configureStore } from 'store';
// import { DisplayedBreedsBreed } from '../DisplayedBreedsBreed';

// const renderWithReact = (
//   Component: JSX.Element,
//   options: RenderWithReduxOpts = {},
// ): { store: Store } & RenderResult => {
//   const { initialState = {}, store = configureStore(initialState) } = options;
//   return {
//     ...render(
//       <Provider store={store}>
//         <MemoryRouter>
//           {Component}
//         </MemoryRouter>
//       </Provider>
//     ),
//     store,
//   };
// };

// const mockBreed: Breed = {
//   breed: 'cerberus',
//   mine: true,
//   isShown: true,
// };

// const mockReduxState: MockReduxState = {
//   breeds: {
//     displayedBreeds: [mockBreed],
//     filter: 'all',
//     searchString: '',
//   },
// };

// afterEach(() => {
//   cleanup();
// });

// test('<DisplayBreedsBreed /> render with emtpy initial redux state, and breed isn\'t mine', () => {
//   const { getByText, container: { firstChild: container } } = renderWithReact(
//     <DisplayedBreedsBreed breed={mockBreed.breed} mine={false} />,
//   );
//   const button: HTMLButtonElement = getByText('Add to favourites') as HTMLButtonElement;
//   expect(button).toHaveStyleRule('background', ORANGE);
//   expect(container).toMatchSnapshot();
// });

// test('<DisplayBreedsBreed /> render with emtpy initial redux state, and breed is mine', () => {
//   const { getByText, container: { firstChild: container } } = renderWithReact(
//     <DisplayedBreedsBreed breed={mockBreed.breed} mine />,
//   );
//   const button: HTMLButtonElement = getByText('Remove from favourites') as HTMLButtonElement;
//   expect(button).toHaveStyleRule('background', LIMEGREEN);
//   expect(container).toMatchSnapshot();
// });

// test('<DisplayedBreedsBreed /> render with initial redux state, and breed is mine', () => {
//   const { getByText, container: { firstChild: container } } = renderWithReact(
//     <DisplayBreedsBreed breed={mockBreed.breed} mine />,
//     { initialState: mockReduxState },
//   );
//   const button: HTMLButtonElement = getByText('Remove from favourites') as HTMLButtonElement;
//   expect(button).toHaveStyleRule('background', LIMEGREEN);
//   expect(container).toMatchSnapshot();
// });
