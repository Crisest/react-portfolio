import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Layout } from 'antd'
import ContactPage from '../components/ContactPage'
import Header from '../components/Header'
import LandingPage from '../components/LandingPage'
import PortfolioApp from '../components/PortfolioApp'
import ProjectsPage from '../components/ProjectsPage'
import MobileMenu from '../components/MobileMenu'
import NotFoundPage from '../components/NotFoundPage'



const { Content, Sider } = Layout


const PortfolioRouter =  () => (
  <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Router> 
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Fragment>
            <Sider className="show-for-desktop">
              <Header />
            </Sider>
            
            <Content>
              <MobileMenu className="show-for-mobile" />
              <Route  path="/bio" component={PortfolioApp} />
              <Route  path="/projects" component={ProjectsPage} />
              <Route  path="/contact" component={ContactPage} />
              
            </Content>
          </Fragment>
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Layout>
)

export { PortfolioRouter as default }