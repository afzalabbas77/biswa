import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar =() => {

  return(  <>
  <header>
        <div className="container topnav mrgnbtm80px">
            

            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <h1><NavLink to="/" title="Biswajit Jha">Biswajit Jha </NavLink> </h1>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><NavLink exact activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink exact activeClassName="menu_active" className="nav-link" to="/book">Book</NavLink> </li>
                    <li className="nav-item"> <NavLink exact activeClassName="menu_active" className="nav-link" to="/column">Col  umns</NavLink></li>
                    <li className="nav-item"><NavLink exact activeClassName="menu_active" className="nav-link" to="/role">Current Role</NavLink></li>
                    {/* <li className="nav-item"><NavLink exact activeClassName="menu_active" className="nav-link" to="/role">Recent Activity</NavLink></li>
                    <li className="nav-item"><NavLink exact activeClassName="menu_active" className="nav-link" to="/role">Photos</NavLink></li>
                    <li className="nav-item"><NavLink exact activeClassName="menu_active" className="nav-link" to="/role">Videos</NavLink></li> */}
                    <li className="nav-item"><NavLink exact activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink></li>
                  </ul>
                  
                </div>
              </nav>
        </div>
    </header>
    </>
  )};
export default Navbar;