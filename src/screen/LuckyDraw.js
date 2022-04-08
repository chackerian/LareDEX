import React, { useState, useEffect } from 'react';
import larecoin from '../larecoin.png'
import logo from '../larelogo.png'
import $ from 'jquery';

export default function LuckyDraw() {

  document.title = "DEX | Lucky Draw | Larecoin"

  const useMountEffect = (fun) => useEffect(fun, [])

  var start = 100000;
  var speed = 400;
  function go() {
    $("#counter").html(start.toFixed(0));
    start += 0.125;
  }

  function timer() {
    setInterval(function () {
        go();
    }, speed);
  }

  useMountEffect(timer)

  return (
     <div className="home">
        <div className="luckyCard">
          <div className="cardLeft">
            <img src={larecoin} className="lareimg" />
              <div className="luckyPrice">
               <h2><img src={logo} className="larelogo" /></h2>
               <p>$0.0001</p>
               <span>-/+ % since last 24h</span>
             </div>
          </div>
          <div className="cardRight">
            <h2 className='usdc'>USDC</h2> <h2 className="jackpot">JACKPOT</h2>
            <p className="drawing">Drawing every Thursday 21:00</p>
            <div id="counter"></div>
            <p>All holders entered weekly automatically</p>
          </div>
        </div>
          <div className="rewardsDiv">
            <button className="rewardsButton">Add Entries</button>
          </div>
          <div className="rewardsDiv">
            <button className="rewardsButton">Past Drawings</button>
          </div>
          <div className="rewardsDiv">
            <button className="rewardsButton">Claim Jackpot (Unlocks for Winner)</button>
          </div>   
     </div>
  );
}