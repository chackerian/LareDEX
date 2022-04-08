import React, { useState } from 'react';
import logo from '../larelogo.png'
import larecoin from '../larecoin.png'

export default function Referrals() {

  document.title = "DEX | Bonds | Larecoin"

  return (
       <div className="home">
	         <div className="referrals">
           <h2 style={{textAlign: "center"}}><img src={logo} className="larelogo" /> REFERRAL PROGRAM</h2>
           <div className="referBenefits">
             <p>20-Tier Referral Rewards Program</p>
             <p>Invite Holders to Earn up to 20% of their Buy In's</p>
             <p>+ up to 20% of their claimed Rewards & Reflections</p>
           </div>
           <img src={larecoin} style={{float: 'right'}}/>
            <div className="percents">
              <p>Lv 1 = 20%</p>
              <p>Lv 2 = 18% + 2% Lv1</p>
              <p>Lv 3 = 16% + 2% Lv 2 + 2% Lv1</p>
              <p>Lv 4 = 14% + 2% Lv 3 + 2% Lv2 + 2% Lv1</p>
              <p>Lv 5 = 12% + 2% Lv 4 + 2% Lv 3 + 2% Lv2 + 2% Lv1</p>
              <p>Lv 6 = 10% + 3% Lv 5 + 2% Lv4 + 2% Lv3 + 2% Lv2 + 1% Lv1</p>
              <p>Lv 7 = 8% + 3% Lv6 + 2% Lv5 + 2% Lv 4 + 2% Lv3 + 2% Lv2 + 1% Lv1</p>
              <p>Lv 8 = 6% + 3% Lv7 + 2% Lv6 + 2% Lv5 + 2% Lv4 + 2%Lv3 + 2% Lv2 + 2% Lv1</p>
              <p>Lv 9 = 6% + 5% Lv8 + 2% Lv7 + 2% Lv6 + 2% Lv5 + 2% Lv4 + 2%Lv3 + 2% Lv2 + 2% Lv1</p>
              <p>Lv 10 = 5% + 3% Lv 9 + 2% Lv8 + 2% Lv7 + 2% Lv6 + 2% Lv5 + 1% Lv4 + 1%Lv3 + 1% Lv2 + 1% Lv1</p>
              <p>Lv 11 = 5% + 3% Lv10 + 2% Lv 9 + 2% Lv8 + 2% Lv7 + 1% Lv6 + 1% Lv5 + 1% Lv4 + 1%Lv3 + 1% Lv2 + 1% Lv1</p>
              <p>Lv 12 = 4% + 2% Lv11 + 2% Lv 10 + 2% Lv 9 + 2% Lv8 + 2% Lv7 + 1% Lv6 + 1% Lv5 + 1% Lv4 + 1%Lv3 + 1% Lv2 + 1% Lv1</p>
              <p>Lv 13 = 4% + 2% Lv12 + 2% Lv11 + 2% Lv 10 + 2% Lv 9 + 1% Lv8 + 1% Lv7 + 1% Lv6 + 1% Lv5 + 1% Lv4 + 1%Lv3 + 1% Lv2 + 1% Lv1</p>
              <p>Lv 14 = 4% + 2% Lv 1 + 2% Lv12 + 2% Lv11 + 1% Lv 10 + 1% Lv 9 + 1% Lv8 + 1% Lv7 + 1% Lv6 + 1% Lv5 + 1% Lv4 + 1%Lv3 + 1% Lv2 + 1% Lv1</p>
              <p>Lv 15 = 4% + 2% Lv14 + 2%Lv 13 + 1% Lv12 + 1% Lv11 + 1% Lv 10 + 1% Lv 9 + 1% Lv8 + 1% Lv7 + 1% Lv6 + 1% Lv5 + 1% Lv4 + 1%Lv3 + 1% Lv2 + 1% Lv1</p>
              <p>Lv 16 = 4% + 2% Lv15 + 1%Lv 14 + 1% Lv13 + 1% Lv12 + 1% Lv11 + 1% Lv 10 + 1% Lv 9 + 1% Lv8 + 1% Lv7 + 1% Lv6 + 1% Lv5 + 1% Lv4 + 1%Lv3 + 1% Lv2 + 1% Lv1</p>
              <p>Lv 17 = 4% + 1% Lv16 + 1% Lv15 + 1%Lv 14 + 1% Lv13 + 1% Lv12 + 1% Lv11 + 1% Lv 10 + 1% Lv 9 + 1% Lv8 + 1% Lv7 + 1% Lv6 + 1% Lv5 + 1% Lv4 + 1%Lv3 + 1% Lv2 + 1% Lv1</p>
              <p>Lv 18 = 3% +1% Lv17 +1% Lv16 + 1% Lv15 + 1%Lv 14 + 1% Lv13 + 1% Lv12 + 1% Lv11 + 1% Lv 10 + 1% Lv 9 + 1% Lv8 + 1% Lv7 + 1% Lv6 + 1% Lv5 + 1% Lv4 + 1%Lv3 + 1% Lv2 + 1% Lv1</p>
              <p>Lv 19 = 2% +1%Lv18 +1% Lv17 +1% Lv16 + 1% Lv15 + 1%Lv 14 + 1% Lv13 + 1% Lv12 + 1% Lv11 + 1% Lv 10 + 1% Lv 9 + 1% Lv8 + 1% Lv7 + 1% Lv6 + 1% Lv5 + 1% Lv4 + 1%Lv3 + 1% Lv2 + 1% Lv1</p>
              <p>Lv 20 = 1% +1% Lv19 + 1% Lv18 +1% Lv17 +1% Lv16 + 1% Lv15 + 1%Lv 14 + 1% Lv13 + 1% Lv12 + 1% Lv11 + 1% Lv 10 + 1% Lv 9 + 1% Lv8 + 1% Lv7 + 1% Lv6 + 1% Lv5 + 1% Lv4 + 1%Lv3 + 1% Lv2 + 1% Lv1</p>
            </div>
	            <form className="referInvite">
	            	<input type="text" placeholder="Enter Wallet Address" style={{padding: 20}} />
	            	<button>Invite</button>
	            </form>
            <h2>My Referrals</h2>
            <table>
              <tr>
                <th>Wallet</th>
                <th>Status</th>
                <th>Level</th>
                <th>Rewards</th>
             </tr>
            <tr>
                <td>d2f156gf1h5h5fd251f2fd212fd</td>
                <td>Active</td>
                <td>1</td>
                <td>99.200555 LARE</td>
            </tr>
          </table>
            </div>
        </div>
  );
}