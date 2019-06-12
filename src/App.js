import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import { GlobalStyle } from './style';
import Header from './common/header/index';
import store from './store';


function App() {
  return (
      <Fragment>
        <GlobalStyle/>
        <Provider store={store}>
          <Header/>
        </Provider>
      </Fragment>
  );
}

export default App;
