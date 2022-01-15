import React from 'react';
import pIcon from '../icons/phone.svg'
import emailIcon from '../icons/email.svg'

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
                  <h1 className="contact-subtitle" style={{color: "#364051"}}>ymurillov@gmail.com</h1>
                </a>
              </div>
              <div  className="contact-icons__item">
                <a href="tel:9059841012">
                  <img style={{width: 250}} src={pIcon} alt="telephon icon"/>
                  <h1 className="contact-subtitle" style={{color: "#364051"}}>905-984-1012</h1>
                </a>
              </div>
            </div>

          </div>
        </div>
        
      </React.Fragment>
    )
}

export { ContactPage as default }