import React from 'react';
import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import Add from './pages/Add';
import Vote from './pages/Vote';
import Result from './pages/Result';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import GlobalStyles from './components/GlobalStyles';

const Main = styled.main`
  display: flex;
  margin: 0;
  justify-content: center;
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AppHeader />
      <Main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Add">
            <Add />
          </Route>
          <Route exact path="/polls/:pollId/Vote">
            <Vote />
          </Route>
          <Route exact path="/polls/:pollId">
            <Result />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
