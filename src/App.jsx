import React from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Book from './Book';
import Column from './Column';
import Crole from './Crole';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import {Switch, Route, Redirect} from 'react-router-dom';


const App = () => {

    return(
        <>
        <Navbar />
        <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path ="/book" component={Book} />
        <Route exact path ="/column" component={Column} />
        <Route exact path ="/role" component={Crole} />
        <Route exact path = "/contact" component={Contact} />
        <Redirect to="/" />
        
        </Switch>
        <Footer />
            
        </>
    )
}

  export default App;