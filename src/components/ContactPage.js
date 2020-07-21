import React from 'react';
import { Typography } from 'antd';
import pIcon from '../icons/phone.svg'
import emailIcon from '../icons/email.svg'


const { Title } = Typography;

const ContactPage = () => {
    return (
      <React.Fragment>
        <div className="header">
          <h1 className="header__title">Get in Touch!</h1>
        </div>
        <div>
          
          <div className="container">
            <div className="contact-icons">
              <div className="contact-icons__item">              
                <a href="mailto: ymurillov@gmail.com">
                  <img style={{width: 250}} src={emailIcon} alt="email icon" />
                  <Title style={{color: "#364051"}}>ymurillov@gmail.com</Title>
                </a>
              </div>
              <div  className="contact-icons__item">
                <a href="tel:9059841012">
                  <img style={{width: 250}} src={pIcon} alt="telephon icon"/>
                  <Title style={{color: "#364051"}}>9059841012</Title>
                </a>
              </div>
            </div>

          </div>
        </div>
        
      </React.Fragment>
    )
}

export { ContactPage as default }