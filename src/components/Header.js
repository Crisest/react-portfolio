import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd'

const Header = ({ location }) => {

  if(location.pathname === '/react-portfolio'){
    return null
  }
  else{
    return (
      <div>
        <div className="logo">
          <Link to="/react-portfolio"><h1>YM</h1></Link>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1"><Link to="/"> Home </Link></Menu.Item>
              <Menu.Item key="2"><Link to="/projects"> Projects </Link></Menu.Item>
              <Menu.Item key="3"><Link to="/contact"> Contact Me</Link></Menu.Item>
        </Menu>
      </div>
    )
  }
}
export default withRouter(Header)