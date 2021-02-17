import React from 'react';
import { NavLink } from 'react-router-dom';
import fbicon from "../src/images/scicon-5.png";
import insta from "../src/images/scicon-4.png";
import youtube from "../src/images/scicon-3.png";
import twicon from "../src/images/scicon-2.png";
import otricon from "../src/images/scicon-1.png";
import leadpic from "../src/images/biswapic.jpg";

const HomeAbout = () => {
    return(
        <>
            <div className="container mrgnbtm80px">
    <div className="row">
    <div className="col-md-6 col-sm-12 aboutleft">
    <div className="socialiconbox">

<NavLink to="https://www.facebook.com/biswaspeaker/" target="_blank"><img src={fbicon} alt="" /></NavLink>
<NavLink to="https://instagram.com/jha.biswajit?igshid=11sytbct28eke" target="_blank"><img src={insta} alt="" /></NavLink>
<NavLink to="https://youtube.com/channel/UCHK1NFigRMbADUbFvMtIutQ" target="_blank"><img src={youtube} alt="" /></NavLink>
<NavLink to="https://twitter.com/biswajit_jha" target="_blank"><img src={twicon} alt="" /></NavLink>
<NavLink to="mailto:biswajitjha013@gmail.com"><img src={otricon} alt="" /></NavLink>


    </div>
    <div>
      <div><img src={leadpic} alt="" className="img-fluid athorimg" alt="" /></div>
      <div className="signbiswa">Author I Social Entrepreneur I Educator I Motivational Speaker</div>
    </div>
    </div>

    <div className="col-md-6 col-sm-12 abouttxt">
    <h2>Biswajit Jha</h2>
    <p id="style-2">Biswajit Jha is a journalist turned social entrepreneur, columnist and author. Jha started his career with The Pioneer in 2005 after completing his masters in mass communication. He was principal correspondent at Zee News and head of the sports department at ZeeNews.com when he decided to quit in 2013, after working in New Delhi for almost nine years, to lead a life of happiness and fulfilment in his village, Rajganj, in West Bengal’s Jalpaiguri district. <br /><br />

      With a guiding principle of doing something for others and uplifting underprivileged children, Jha, along with his wife, Dr Sanjukta Saha, started an educational trust that also runs a school—Epic Public School—in Cooch Behar. Having identified how hard unemployment hurts the educated youth, Jha advocates social entrepreneurship as the solution. Determined to give back to his roots, Jha took up the responsibility of running the Rajganj Football Academy, which changed the fortunes of many children in his village. <br /><br />
      A sports buff and fitness enthusiast, he aims to promote stress-free learning through games and yoga. An adjunct professor of media communication at the Gyalpozhing college of Information Technology in eastern Bhutan’s Mongar, Jha is also the secretary of the Bengal chapter of the Kudo International Federation of India (KIFI), which is promoted by Bollywood star Akshay Kumar. Jha regularly writes columns for the news portals of national media houses like Times Now, Zee media, CNN-News18, The Daily Guardian etc. True to his versatile personality, in 2019, Jha went to China to conduct the Durga Puja for the Bengali community in Beijing. He currently lives with his parents, father-in-law, wife and son in north Bengal. 
    </p>
    </div>
   
    </div>
    </div>
        </>
    )
}

export default HomeAbout;