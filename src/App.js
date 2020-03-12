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
    <>
      <Router>
        <Header></Header>

        <main className="main">
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/Add">
              <Add />
            </Route>
            <Route path="/Vote">
              <Vote />
            </Route>
            <Route path="/Result">
              <Result />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
