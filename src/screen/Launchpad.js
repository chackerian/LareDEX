import React, { useState } from 'react';

export default function Launchpad() {

  return (
       <div className="home">
        <div className="swaplabeldiv">
            <h2 className="swaplabel">LAUNCHPAD</h2>
            <div style={{display: 'flex', marginTop: '3em', width: '100%'}}>
            <div className="votecard">
            <div className="item2">
                 <p className="cardHeading">Proposal Name</p>
                 <p>Proposal Date: </p>
                 <p>(New Listing)</p>
                 <p>Proposal Description:</p>
             </div>
          </div>
        <div className="votecard">
            <div className="item2">
                 <p className="cardHeading">Proposal Name</p>
                 <p>Proposal Date: </p>
                 <p>(New Listing)</p>
                 <p>Proposal Description:</p>
             </div>
          </div>
         </div>
        </div>
       </div>
  );
}