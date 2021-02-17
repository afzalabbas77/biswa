import React from 'react';
import { NavLink } from 'react-router-dom';
import bookimg from '../src/images/bikeambulance.jpg';

const Homebook = () => {

    return (
        <>

<div className="container mrgnbtm80px" id="book">
      <div className="row booksection">
       <div className="col-md-12 text-center"><h2 className="headingtext">Book<span>Description about the book</span></h2></div>
      <div className="col-md-6 col-sm-12"><img src={bookimg} alt="" className="img-fluid" />
      <div className="orderbook"><h4><NavLink to="https://www.amazon.in/Bike-Ambulance-Dada-Inspiring-Karimul/dp/0143449826/ref=mp_s_a_1_1?dchild=1&amp;keywords=bike+ambulance+dada&amp;qid=1607672868&amp;sr=8-1" target="_blank">Order the book</NavLink></h4></div>
      </div>

  <div className="col-md-6 col-sm-12 aboutbook">
<p className="abouttxt-ohter" id="style-2">Twenty-five years ago, Karimul Hak lost his mother because he could not afford an ambulance and there was no other way to take her to a hospital. However, when his co-worker fell sick, Karimul resolved to ensure that history did not repeat itself.<br /><br />
  Bike Ambulance Dada, the authorized biography of Padma Shri awardee Karimul Hak, is the most inspiring and heart-warming story you will read this year. It documents the extraordinary journey of a tea garden worker who saved thousands of lives by starting a free bike-ambulance service from his village to the nearest hospital in an attempt to fill the gap the insufficient rural healthcare created.<br /><br />
  This book, about the extraordinary life of a man who has devoted his entire life to helping those around him and putting others before himself, is a must-read today, serving as an inspiration for us to do and be better.
  
</p>
  </div>
</div>
    </div>

        </>    )
}

export default Homebook;