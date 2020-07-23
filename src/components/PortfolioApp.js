import React from 'react';
import icon from '../icons/code.svg'


const PortfolioApp = () => {

 
    return ( 
    <div>
      <div className="header">
        <h1 className="header__title">Full Stack Software Developer </h1>
      </div>
        <h1 className="header__subtitle"> I don't write a lot of code. I solve a lot of problems.</h1>
        <div className="container">
          
          <h1 >Graduated from Niagara College with an advance diploma in Computer Programming Analyst. I possess many skills that were developed through both practical experiences and internships. I also designed, planned, tested, and deployed multiple full-stack web applications with different technologies.</h1>
          <div className="container__centered">
          <h1 >Front-end: React, Redux, Hooks, HTML5, SCSS, JavaScript, Bootstrap, Antd.</h1>
          <h1 >Back-end: C# ASP.NET Core MVC, PHP Laravel, NodeJs Express.</h1>
          <h1 >DB: SQL server, MySQL, MongoDB, SQLite.</h1>
          </div>
          <div className="image-centered">
            <img className="svg-style" src={icon} alt="programmer icon svg"/>
          </div>
          
      </div>
        </div>  
        
      
    )
}

export { PortfolioApp as default } 