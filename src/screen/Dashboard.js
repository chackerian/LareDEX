import React from 'react';

import larecoin from '../larecoin.png'
import usd from '../usd.png'
import bnb from '../bnb.png'
import logo from '../larelogo.png'

export default function Dashboard() {

  return (
       <div className="home">
          <div className="card">
            <img src={larecoin} className="lareimg" />
             <h2 className="cardHeading"><img src={logo} className="larelogo" /> Price</h2>
              <br />
             <span className="price">$0.0001</span>
             <span className="percentChange">-/+ % since last 24h</span>
          </div>
          <div className="card">
            <img src={larecoin} className="lareimg" />
            <h2 className="cardHeading"><img src={logo} className="larelogo" /> Volume</h2>
            <span className="price">$-/+</span>
            <span className="percentChange">-/+ % since last 24h</span>
          </div>
          <div className="card">
            <img src={bnb} />
            <h2 className="cardHeading">Liquidity</h2>
            <span className="price">169.06428 BNB</span>
            <span className="percentChange">-/+ % since last 24h</span>
          </div>
          <div className="card">
            <img src={usd} />
            <h2 className="cardHeading">Bonds</h2>
            <span className="price">715</span>
            <span className="percentChange">-/+ % since last 24h</span>
          </div>
          <div className="card">
            <img src={larecoin} className="lareimg"/>
            <h2 className="cardHeading"><img src={logo} className="larelogo" /> holders</h2>
            <span className="price">325,724.00 USDC</span>
            <span className="percentChange">-/+ % since last 24h</span>
          </div>
          <div className="card">
            <img src={larecoin} className="lareimg"/>
            <h2 className="cardHeading"><img src={logo} className="larelogo" /> Transfers</h2>
            <span className="price">1246</span>
            <span className="percentChange">-/+ % since last 24h</span>
          </div>
       </div>
  );
}