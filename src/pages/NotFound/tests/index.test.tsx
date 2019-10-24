import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { configureStore } from 'store';
import NotFound from '..';

test('<NotFound />', () => {
  const store = configureStore();
  const {
    container: { firstChild: container },
  } = render(
    <Provider store={store}>
      <NotFound />
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
