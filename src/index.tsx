import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { configureStore, history } from 'store';
import DisplayedBreedsPage from 'pages/DisplayedBreeds';
import SingleBreedPage from 'pages/SingleBreed';
import NotFoundPage from 'pages/NotFound';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <>
      <GlobalStyles />
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={DisplayedBreedsPage} />
          <Route path="/breed/:breed" component={SingleBreedPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </ConnectedRouter>
    </>
  </Provider>
);

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 20px;
  }

  body {
    margin: 0;
    box-sizing: border-box;
	}

	*, 
  *::after,
  *::before {
	  box-sizing: inherit;
	  outline: none;
	}
	
	a {
	  text-decoration: none;
	  cursor: pointer;
	  &:hover {
      background: linear-gradient(currentColor, currentColor) no-repeat 0 0.95em;
      background-size: 100% 1px;
      text-shadow: .05em 0 white, -.05em 0 white;
    }
	}
	
	button {
	  outline: none;
	  cursor: pointer;
	}
	
`;

render(<App />, document.getElementById('root'));
