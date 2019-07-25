import React from 'react';
import './App.css';
import LandingPage from '../landingpage/LandingPage';
import Timeline from '../timeline/Timeline';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShowContent from '../showcontent/ShowContent';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/cinema' component={Timeline} />
        <Route path ='/cinema/:id' component={ShowContent} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;