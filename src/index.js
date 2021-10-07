import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from 'pages/Home';
import Survey from 'pages/Survey';
import Error from 'components/Error';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import Results from 'pages/Results';
import Freelances from 'pages/Freelances';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/survey/:surveyId">
          <Survey />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/freelances">
          <Freelances />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
