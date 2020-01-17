import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import JoinPage from 'pages/JoinPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/join" component={JoinPage} />
      </Switch>
    </>
  );
}

export default App;
