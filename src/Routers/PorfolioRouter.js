import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Layout } from 'antd'
import ContactPage from '../components/ContactPage'
import Header from '../components/Header'
import LandingPage from '../components/LandingPage'
import PortfolioApp from '../components/PortfolioApp'
import ProjectsPage from '../components/ProjectsPage'
import MobileMenu from '../components/MobileMenu'



const { Content, Sider } = Layout


const PortfolioRouter =  () => (
  <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Router> 
        <Switch>
          <Route path="/react-portfolio" component={LandingPage} />
          <Fragment>
            <Sider className="show-for-desktop">
              <Header />
            </Sider>
            
            <Content>
              <MobileMenu className="show-for-mobile" />
              <Route exact path="/" component={PortfolioApp}/>
              <Route exact path="/projects" component={ProjectsPage} />
              <Route path="/contact" component={ContactPage} />
            </Content>
          </Fragment>
        </Switch>
      </Router>
    </Layout>
)

export { PortfolioRouter as default }