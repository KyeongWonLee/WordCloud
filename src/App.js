import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import AppShell from './components/AppShell.js';
import Home from './components/Home';
import Texts from './components/Texts';
import Words from './components/Words';

function App() {
  return (
    <Router>
        <AppShell>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/texts" component={Texts}></Route>
          <Route exact path="/words" component={Words}></Route>
        </div>
      </AppShell>
    </Router>
  );
}

export default App;
