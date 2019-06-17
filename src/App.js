import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import { GlobalStyle } from './style';
import Header from './common/header/index';
import store from './store';
import HomeWrapper from './pages/home';



function App() {
  return (
      <Fragment>
        <GlobalStyle/>
        <Provider store={store}>
          <Header/>
          <HomeWrapper/>
        </Provider>
      </Fragment>
  );
}

export default App;
