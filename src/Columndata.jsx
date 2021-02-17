import React from 'react';
import {NavLink} from 'react-router-dom';

const Columndata = (props) => {
    return(
        <>

<div class="col-md-4 col-sm-12 ">
      <div class="articlesection">  <img src={props.imgsrc} alt="" class="img-fluid" />
      <h3>{props.title}</h3>
      <p>{props.para}</p>
      <h4><NavLink to={props.link} target={props.target}>{props.button}</NavLink></h4>
    </div>
      </div>


        </>
    )
}
export default Columndata;