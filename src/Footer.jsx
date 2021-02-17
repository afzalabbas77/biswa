import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {

    return(
        <>
        <footer>
      <h2 class="headingtext">Contact<span>Get in Touch</span></h2>
      <div class="footersocial">
        <NavLink to="https://www.facebook.com/biswaspeaker/" target="_blank"> <img src="images/f-scicon-5.png" alt="" /> </NavLink>
        <NavLink to="https://instagram.com/jha.biswajit?igshid=11sytbct28eke" target="_blank"><img src="images/f-scicon-4.png" alt="" /></NavLink>
        <NavLink to="https://youtube.com/channel/UCHK1NFigRMbADUbFvMtIutQ" target="_blank"><img src="images/f-scicon-3.png" alt="" /></NavLink>
        <NavLink to="https://twitter.com/biswajit_jha" target="_blank"><img src="images/f-scicon-2.png" alt="" /></NavLink>
        <NavLink to="mailto:biswajitjha013@gmail.com" target="_blank"><img src="images/f-scicon-1.png" alt="" /></NavLink>
        </div>
    </footer>
        </>
    )
}

export default Footer;