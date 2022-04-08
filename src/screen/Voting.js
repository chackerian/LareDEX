import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'

export default function Voting() {

    document.title = "DEX | Voting | Larecoin"


  return (
       <div className="home">
        <div className="swaplabeldiv">
            <h2 className="swaplabel">VOTING</h2>
            <div style={{float: 'right', padding: '2em'}}>
              <button className="addLiquidityButton">New Proposals</button>
              <button className="addLiquidityButton">Archived</button>
              <button className="addLiquidityButton">Submit Proposal</button>
           </div>
           <div style={{display: 'flex', marginTop: '3em', width: '100%'}}>
            <div className="votecard">
            <div className="item2">
                 <p className="cardHeading">Proposal Name</p>
                 <p>Proposal Date: </p>
                 <p>(New Listing)</p>
                 <p>Proposal Description:</p>
             </div>
             <div class="item3">
                <div className="VotingButtons">
                    <button className="thumbsUp"><FontAwesomeIcon icon={ faThumbsUp} className="convertIcon thumbsUp" /></button>
                    <button className="thumbsDown"><FontAwesomeIcon icon={ faThumbsDown} className="convertIcon thumbsDown" /></button>
                </div>
             </div>
          </div>
        <div className="votecard">
            <div className="item2">
                 <p className="cardHeading">Proposal Name</p>
                 <p>Proposal Date: </p>
                 <p>(New Listing)</p>
                 <p>Proposal Description:</p>
             </div>
            <div class="item3">
                <div className="VotingButtons">
                    <button className="thumbsUp"><FontAwesomeIcon icon={ faThumbsUp} className="convertIcon thumbsUp" /></button>
                    <button className="thumbsDown"><FontAwesomeIcon icon={ faThumbsDown} className="convertIcon thumbsDown" /></button>
                </div>
             </div>
          </div>
        </div>
        </div>
        </div>

  );
}