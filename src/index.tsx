import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import Home from 'pages/Home';
import Survey from 'pages/Survey';
import Error from 'components/Error';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import Results from 'pages/Results';
import Freelances from 'pages/Freelances';
import ThemeProvider from 'utils/ThemeProvider';
import Footer from 'components/Footer';
import { SurveyProvider } from 'utils/SurveyProvider';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/survey/:questionId">
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
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
