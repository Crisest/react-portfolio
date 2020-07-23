import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'

const MobileMenu = () => {
    const data = [
        {
          value: '1',
          label: 'Home',
          component: "/"
        }, {
          value: '2',
          label: 'Projects',
          component: "/projects"
        },
        {
          value: '3',
          label: 'Contact me',
          component: "/contact"
        },
      ];    

    
    const [initData, setData] = useState('')
    const [show, setShow] = useState(false)
    
    const onChange = (value) => {
        let label = '';
        data.forEach((dataItem) => {
          if (dataItem.value === value[0]) {
            label = dataItem.label;
            
          }
        });
        console.log(label);
        
      }
     const handleClick = (e) => {
        e.preventDefault(); // Fix event propagation on Android
        setShow(!show)
        // mock for async data loading
        if (!initData) {
          setTimeout(() => {
            setData(data)
          }, 100);
        }
      }
    const onMaskClick = () => {
        setShow(false)
      }

    const menuEl = (
      <Menu
        className="single-foo-menu"
        data={initData}
        value={['1']}
        level={1}
        onChange={onChange}
        height={document.documentElement.clientHeight * 0.2}
      />
    );
    const loadingEl = (
      <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );
    return(
        <div className={show ? 'single-menu-active' : ''}>
        <div>
          <NavBar
            leftContent="Menu"
            mode="light"
            onLeftClick={handleClick}
            className="single-top-nav-bar"
          >
            OneLevel menu
          </NavBar>
        </div>
        {show ? initData ? menuEl : loadingEl : null}
        {show ? <div className="menu-mask" onClick={onMaskClick} /> : null}
      </div>

    )

}

export { MobileMenu as default }