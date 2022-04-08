import React, { useState, useEffect } from 'react';
import $ from 'jquery'

export default function Bonds() {

  document.title = "DEX | Bonds | Larecoin"

      function collapsible(){
        var coll = document.getElementsByClassName("collapsible");
        var i;
        console.log('click')

        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            console.log('clicked')
            this.classList.toggle("active");
            var row = $(this).closest("tr")
            console.log(row)
            var content = row[0].nextSibling
            content.style.display = "block"
            if (content.style.maxHeight){
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            } 
          });
        }
    }

    useEffect(() => {
        collapsible()
    });

  return (
       <div className="home">
            <div className="liquidity">
                <h3 style={{display: "inline-block", marginLeft: '1em'}}>BONDS</h3> <span className="poolreward">Each Bond pool pays out 0.5% per day staked + 0.1% per Conversion</span>
            </div>
          <table className="pooltable">
            <tbody>
              <tr>
                <th></th>
                <th></th>
                <th>Total Staked</th>
                <th>LPs</th>
                <th>Volume</th>
                <th>APY</th>
                <th><button className="addLiquidityButton">Add Liquidity</button></th>
             </tr>
             <tr>
                <td>1</td>
                <td className="pooltitle"><span className="pooltitleSpan">LARE / LUSD</span></td>
                <td>268.252102552</td>
                <td>64</td>
                <td>99.200555 BNB</td>
                <td>37.2% </td>
                <td>
                <button className="collapsible">Details</button>
                </td>
            </tr>
            <tr className='content'>
                <td></td>
                <td></td>
                <td><button>View Bond</button></td>
                <td><button>See Contract</button></td>
                <td>Exchange Rate</td>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th>Total Staked</th>
                <th>LPs</th>
                <th>Volume</th>
                <th>APY</th>
                <th><button className="addLiquidityButton">Add Liquidity</button></th>
             </tr>
            <tr>
                <td>2</td>
                <td className="pooltitle"><span className="pooltitleSpan">LUSD / USDT</span></td>
                <td>268.252102552</td>
                <td>64</td>
                <td>99.200555 BNB</td>
                <td>37.2% </td>
                <td>
                <button className="collapsible">Details</button>
                </td>
            </tr>
            <tr className='content'>
                <td><button>View Bond</button></td>
                <td><button>See Contract</button></td>
                <td>Exchange Rate</td>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th>Total Staked</th>
                <th>LPs</th>
                <th>Volume</th>
                <th>APY</th>
                <th><button className="addLiquidityButton">Add Liquidity</button></th>
             </tr>
            <tr>
                <td>3</td>
                <td className="pooltitle"><span className="pooltitleSpan">USDC / USDT</span></td>
                <td>268.252102552</td>
                <td>64</td>
                <td>99.200555 BNB</td>
                <td>37.2% </td>
                <td>
                <button className="collapsible">Details</button>
                </td>
            </tr>
            <tr className='content'>
                <td><button>View Pool</button></td>
                <td><button>See Contract</button></td>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th>Total Staked</th>
                <th>LPs</th>
                <th>Volume</th>
                <th>APY</th>
                <th><button className="addLiquidityButton">Add Liquidity</button></th>
             </tr>
            <tr>
                <td>4</td>
                <td className="pooltitle"><span className="pooltitleSpan">LUSD / USDC</span></td>
                <td>268.252102552</td>
                <td>64</td>
                <td>99.200555 BNB</td>
                <td>37.2% </td>
                <td>
                <button className="collapsible">Details</button>
                </td>
            </tr>
            <tr className='content'>
                <td><button>View Bond</button></td>
                <td><button>See Contract</button></td>
                <td>Exchange Rate</td>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th>Total Staked</th>
                <th>LPs</th>
                <th>Volume</th>
                <th>APY</th>
                <th><button className="addLiquidityButton">Add Liquidity</button></th>
             </tr>
            <tr>
                <td>5</td>
                <td className="pooltitle"><span className="pooltitleSpan">LUSD / BUSD</span></td>
                <td>268.252102552</td>
                <td>64</td>
                <td>99.200555 BNB</td>
                <td>37.2% </td>
                <td>
                <button className="collapsible">Details</button>
                </td>
            </tr>
            <tr className='content'>
                <td><button>View Bond</button></td>
                <td><button>See Contract</button></td>
                <td>Exchange Rate</td>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th>Total Staked</th>
                <th>LPs</th>
                <th>Volume</th>
                <th>APY</th>
                <th><button className="addLiquidityButton">Add Liquidity</button></th>
             </tr>
            <tr>
                <td>6</td>
                <td className="pooltitle"><span className="pooltitleSpan">LUSD / UST</span></td>
                <td>268.252102552</td>
                <td>64</td>
                <td>99.200555 BNB</td>
                <td>37.2% </td>
                <td>
                <button className="collapsible">Details</button>
                </td>
            </tr>
            <tr className='content'>
                <td><button>View Bond</button></td>
                <td><button>See Contract</button></td>
                <td>Exchange Rate</td>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th>Total Staked</th>
                <th>LPs</th>
                <th>Volume</th>
                <th>APY</th>
                <th><button className="addLiquidityButton">Add Liquidity</button></th>
             </tr>
            <tr>
                <td>7</td>
                <td className="pooltitle"><span className="pooltitleSpan">LUSD / DAI</span></td>
                <td>268.252102552</td>
                <td>64</td>
                <td>99.200555 BNB</td>
                <td>37.2% </td>
                <td>
                <button className="collapsible">Details</button>
                </td>
            </tr>
            <tr className='content'>
                <td><button>View Bond</button></td>
                <td><button>See Contract</button></td>
                <td>Exchange Rate</td>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th>Total Staked</th>
                <th>LPs</th>
                <th>Volume</th>
                <th>APY</th>
                <th><button className="addLiquidityButton">Add Liquidity</button></th>
             </tr>
            <tr>
                <td>8</td>
                <td className="pooltitle"><span className="pooltitleSpan">LUSD / TUSD</span></td>
                <td>268.252102552</td>
                <td>64</td>
                <td>99.200555 BNB</td>
                <td>37.2% </td>
                <td>
                <button className="collapsible">Details</button>
                </td>
            </tr>
            <tr className='content'>
                <td><button>View Bond</button></td>
                <td><button>See Contract</button></td>
                <td>Exchange Rate</td>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th>Total Staked</th>
                <th>LPs</th>
                <th>Volume</th>
                <th>APY</th>
                <th><button className="addLiquidityButton">Add Liquidity</button></th>
             </tr>
            <tr>
                <td>9</td>
                <td className="pooltitle"><span className="pooltitleSpan">LUSD / USDP</span></td>
                <td>268.252102552</td>
                <td>64</td>
                <td>99.200555 BNB</td>
                <td>37.2% </td>
                <td>
                <button className="collapsible">Details</button>
                </td>
            </tr>
            <tr className='content'>
                <td><button>View Bond</button></td>
                <td><button>See Contract</button></td>
                <td>Exchange Rate</td>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th>Total Staked</th>
                <th>LPs</th>
                <th>Volume</th>
                <th>APY</th>
                <th><button className="addLiquidityButton">Add Liquidity</button></th>
             </tr>
            <tr>
                <td>10</td>
                <td className="pooltitle"><span className="pooltitleSpan">LARE / BUSD</span></td>
                <td>268.252102552</td>
                <td>64</td>
                <td>99.200555 BNB</td>
                <td>37.2% </td>
                <td>
                <button className="collapsible">Details</button>
                </td>
            </tr>
            <tr className='content'>
                <td><button>View Bond</button></td>
                <td><button>See Contract</button></td>
                <td>Exchange Rate</td>
            </tr>
          </tbody>
        </table>
       </div>
  );
}