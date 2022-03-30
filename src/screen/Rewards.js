import React, { useState } from 'react';
import larecoin from '../larecoin.png'
import bnb from '../bnb.png'
import logo from '../larelogo.png'

export default function Rewards() {

  return (
       <div className="home">
          <div className="card">
            <img src={larecoin} className="lareimg" />
             <h2 className="cardHeading"><img src={logo} className="larelogo" /> Price</h2>
             <span>$0.0001</span>
             <span className="percentChange">-/+ % since last 24h</span>
          </div>
          <div className="card">
            <img src={bnb} />
            <h2 className="cardHeading">BNB Price</h2>
            <span>$-/+</span>
            <span className="percentChange">-/+ % since last 24h</span>
          </div>
          <div className="card">
            <img src={larecoin} className="lareimg"/>
            <h2 className="cardHeading"><img src={logo} className="larelogo" />Rewards</h2>
            <span>169.06428 BNB</span>
            <span className="percentChange">-/+ % since last 24h</span>
          </div>
          <div className="card">
            <img src={bnb} />
            <h2 className="cardHeading">BNB Reflections</h2>
            <span>325,724.00 USDC</span>
            <span className="percentChange">-/+ % since last 24h</span>
          </div>
       </div>
  );
}