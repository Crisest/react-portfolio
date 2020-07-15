import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


const PortfolioApp = () => {
  return ( 
    <div>
      <h1>This is me</h1>
    </div>
  )
}

const NotFoundPage = () => (
  <div>
  <h1>404 Page not Found</h1>
  </div>
)

const ProjectsPage = () => {
  return (
    <div>
      <h1>Projects</h1>
    </div>
  )
}

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Me!</h1>
    </div>
  )
}

const Header = () => (
  <div>
    <h1>This is the header</h1>
    <Link to="/"> Home </Link>
    <Link to="/projects"> Projects </Link>
    <Link to="/contact"> Contact Me</Link>
  </div>
)

const PortfolioRouter =  () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={PortfolioApp}/>
        <Route exact path="/projects" component={ProjectsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)


ReactDOM.render(
  <React.StrictMode>
    <PortfolioRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
