import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Results from './Results';
import Home from './Home';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/results" component={Results} exact/>
        </Switch>
        <header className="App-header">
        </header>
      </div>
    </BrowserRouter>
  );
}

