import React from 'react';
import Sdata from './Sdata';
import Columndata from './Columndata';


const Column = () => {

    return(
        <>

<div class="container mrgnbtm80px" id="columns">
      <div class="row">
       <div class="col-md-12 text-center"><h2 class="headingtext">Columns<span>Various Articles written in different media houses</span></h2></div>
      

       {
          Sdata.map((val, ind) => {
          return <Columndata Id={val.Id}  imgsrc={val.imgsrc} title={val.title} para={val.para} button={val.button} link={val.link} target={val.target}  />
          })
           }

        

</div>

    </div>
           
        </>
    )
}

export default Column;