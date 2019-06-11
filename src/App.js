import React, { Fragment } from 'react';
import { GlobalStyle } from './style';
import Header from './common/header/index';

function App() {
  return (
      <Fragment>
        <GlobalStyle/>
          <Header/>
      </Fragment>
  );
}

export default App;
