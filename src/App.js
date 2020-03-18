import React from 'react';
import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import Add from './pages/Add';
import Vote from './pages/Vote';
import Result from './pages/Result';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import GlobalStyles from './components/GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import wave from './components/themes/wave';

const Main = styled.main`
  display: flex;
  margin: 0;
  justify-content: center;
`;

function App() {
  return (
    <ThemeProvider theme={wave}>
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
    </ThemeProvider>
  );
}

export default App;
