import React, { useState } from 'react';
import larecoin from '../larecoin.png'
import bnb from '../bnb.png'
import logo from '../larelogo.png'

export default function Rewards() {

  document.title = "DEX | Rewards | Larecoin"

  return (
       <div className="home">
          <div class="card">
            <div class="item2">
              <img src={larecoin} />
            </div>
            <div class="item3">
              <h2 className="cardHeading"><img src={logo} className="larelogo" /> Price</h2>
            </div>  
            <div class="item5">
              <span className="price">325,724.00 USDC</span>
              <br />
              <span className="percentChange">-/+ % since last 24h</span>
            </div>
          </div>
          <div class="card">
            <div class="item2">
              <img src={bnb} />
            </div>
            <div class="item3">
              <h2 className="cardHeading">BNB Price</h2>
            </div>  
            <div class="item5">
              <span className="price">325,724.00 USDC</span>
              <br />
              <span className="percentChange">-/+ % since last 24h</span>
            </div>
          </div>
          <div class="card">
            <div class="item2">
              <img src={larecoin} />
            </div>
            <div class="item3">
              <h2 className="cardHeading"><img src={logo} className="larelogo" /> Rewards</h2>
            </div>  
            <div class="item5">
              <span className="price">325,724.00 USDC</span>
              <br />
              <span className="percentChange">-/+ % since last 24h</span>
            </div>
          </div> 
          <div class="card">
            <div class="item2">
              <img src={bnb} />
            </div>
            <div class="item3">
              <h2 className="cardHeading">BNB Reflections</h2>
            </div>  
            <div class="item5">
              <span className="price">325,724.00 USDC</span>
              <br />
              <span className="percentChange">-/+ % since last 24h</span>
            </div>
          </div>
          <div className="rewardsDiv">
            <button className="rewardsButton">Claim Rewards</button>
          </div>
          <div className="rewardsDiv">
            <button className="rewardsButton">Rewards History</button>
          </div>   
       </div>
  );
}