import React from 'react';
import icon from '../icons/code.svg'


const PortfolioApp = () => {

  const svgStyle = {
    maxWidth: '15em',
    float: 'right'
  }
    return ( 
    <div>
      <div className="header">
        <h1 className="header__title">Full Stack Software Developer </h1>
      </div>
        <h1 className="header__subtitle"> I design and code beautiful simple things.</h1>
        <div className="container">
        
          <h1 className="container_centered">Graduated from Niagara College with an advance diploma on Computer Programming Analyst. I posses many skills developed trough practical
          experience, and interships. Designed, Planned and Deployed multiple full-stack web-applications. I am proeficient with JavaScript, C#, PHP</h1>
          <img src={icon} style={svgStyle} alt="svg "/>
      </div>
        </div>  
        
      
    )
}

export { PortfolioApp as default } 