import React from 'react';

import larecoin from '../larecoin.png'
import usd from '../usd.png'
import bnb from '../bnb.png'
import logo from '../larelogo.png'

export default function Dashboard() {

  document.title = "DEX | Dashboard | Larecoin"

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
              <img src={larecoin} />
            </div>
            <div class="item3">
              <h2 className="cardHeading"><img src={logo} className="larelogo" /> Volume</h2>
            </div>  
            <div class="item5">
              <span className="price">325,724.00 USDC</span>
              <br />
              <span className="percentChange">-/+ % since last 24h</span>
            </div>
          </div><div class="card">
            <div class="item2">
              <img src={bnb} />
            </div>
            <div class="item3">
              <h2 className="cardHeading"> Liquidity</h2>
            </div>  
            <div class="item5">
              <span className="price">325,724.00 USDC</span>
              <br />
              <span className="percentChange">-/+ % since last 24h</span>
            </div>
          </div><div class="card">
            <div class="item2">
              <img src={usd} />
            </div>
            <div class="item3">
              <h2 className="cardHeading"> Bonds</h2>
            </div>  
            <div class="item5">
              <span className="price">325,724.00 USDC</span>
              <br />
              <span className="percentChange">-/+ % since last 24h</span>
            </div>
          </div><div class="card">
            <div class="item2">
              <img src={larecoin} />
            </div>
            <div class="item3">
              <h2 className="cardHeading"><img src={logo} className="larelogo" /> Holders</h2>
            </div>  
            <div class="item5">
              <span className="price">325,724.00 USDC</span>
              <br />
              <span className="percentChange">-/+ % since last 24h</span>
            </div>
          </div><div class="card">
            <div class="item2">
              <img src={larecoin} />
            </div>
            <div class="item3">
              <h2 className="cardHeading"><img src={logo} className="larelogo" /> Transfers</h2>
            </div>  
            <div class="item5">
              <span className="price">325,724.00 USDC</span>
              <br />
              <span className="percentChange">-/+ % since last 24h</span>
            </div>
          </div>
       </div>
  );
}