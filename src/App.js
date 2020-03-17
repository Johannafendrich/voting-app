import React from 'react';
import Header from './components/Header';
import './App.css';
import Home from './pages/Home';
import Add from './pages/Add';
import Vote from './pages/Vote';
import Result from './pages/Result';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />

      <main className="main">
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
      </main>
    </Router>
  );
}

export default App;
