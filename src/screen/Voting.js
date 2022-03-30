import React, { useState } from 'react';

export default function Voting() {

  return (
       <div className="home">
          <button>New Proposal</button>
          <button>Archived</button>
          <button>Submit Proposal</button>
          <div className="card">
             <h2 className="cardHeading"></h2>
             <p className="cardHeading">Proposal Name</p>
             <p>Proposal Date: </p>
             <p>(New Listing)</p>
             <p>Proposal Description:</p>
          </div>
          <div className="card">
            <h2 className="cardHeading"></h2>
             <p className="cardHeading">Proposal Name</p>
             <p>Proposal Date: </p>
             <p>(New Listing)</p>
             <p>Proposal Description:</p>
          </div>
       </div>

  );
}