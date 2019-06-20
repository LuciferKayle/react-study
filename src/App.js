import React  from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from "react-router-dom";
import { GlobalStyle } from './style';
import Header from './common/header/index';
import store from './store';
import HomeWrapper from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Write from './pages/write';


function App() {
  return (
      <Router>
        <GlobalStyle/>
        <Provider store={store}>
          <Header/>
            <Route exact path="/" component={HomeWrapper} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/login" component={Login} />
            <Route path="/write" component={Write} />
        </Provider>
      </Router>
  );
}

export default App;
