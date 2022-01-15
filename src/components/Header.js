import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd'
import Resume from '../docs/YM_july.pdf'


const Header = ({ location }) => {

  if(location.pathname === '/react-portfolio'){
    return null
  }
  else{
    return (
      <React.Fragment>
          <div className="logo">
            <Link to="/"><h1>YM</h1></Link>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><Link to="/bio"> Home </Link></Menu.Item>
                <Menu.Item key="2"><Link to="/projects"> Projects </Link></Menu.Item>
                <Menu.Item key="3"><Link to="/contact"> Contact Me</Link></Menu.Item>
                <Menu.Item key="4"><a rel="noopener noreferrer" target="_blank" href={Resume}>
                Resume</a></Menu.Item>
          </Menu>
      </React.Fragment>
    )
  }
}
export default withRouter(Header)