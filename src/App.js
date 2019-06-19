import React  from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalStyle } from './style';
import Header from './common/header/index';
import store from './store';
import HomeWrapper from './pages/home';
import Detail from './pages/detail';



function App() {
  return (
      <Router>
        <GlobalStyle/>
        <Provider store={store}>
          <Header/>
            <Route exact path="/" component={HomeWrapper} />
            <Route path="/detail" component={Detail} />
        </Provider>
      </Router>
  );
}

export default App;
