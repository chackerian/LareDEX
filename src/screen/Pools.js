import React, { useState, useEffect } from 'react';
import $ from 'jquery'

export default function Pools() {

    function collapsible(){
        var coll = document.getElementsByClassName("collapsible");
        var i;
        console.log('click')

        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            console.log('clicked')
            this.classList.toggle("active");
            var row = $(this).closest("tr")
            var content = row[0].nextSibling
            content.style.display = "table-row"
            if (content.style.maxHeight){
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
              content.style.display = "none"
            } 
          });
        }
    }

    useEffect(() => {
        collapsible()
    });


    document.title = "DEX | Pools | Larecoin"

        const options = [
          "LARE / HBAR",
          "LARE / ONE",
          "LARE / BTC",
          "BTC / USDT",
          "LARE / ETH",
          "LUSD / USDC",
          "BNB / BUSD",
          "LARE / BNB",
          "LARE / SOL",
          "LARE / DOGE",
          "LARE / SHIBA",
          "LARE / MATIC",
          "LARE / LTC",
          "LARE / ATOM",
          "LARE / TRX",
          "LARE / XLM",
          "LARE / XMR",
          "BTC / ETH"
        ]

  return (
       <div className="home">
            <div className="liquidity">
                <h3 style={{display: "inline-block", marginLeft: '1em'}}>Liquidity Pools</h3> <span className="poolreward">Each Pool Rewards its LP's 0.2% of each conversion in Rewards and Reflections</span>
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
                <td className="pooltitle"><span className="pooltitleSpan">LARE / HBAR</span></td>
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
                <td>2</td>
                <td className="pooltitle"><span className="pooltitleSpan">LARE / ONE</span></td>
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
                <td>3</td>
                <td className="pooltitle"><span className="pooltitleSpan">LARE / BTC</span></td>
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
                <td className="pooltitle"><span className="pooltitleSpan">BTC / USDT</span></td>
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
                <td>5</td>
                <td className="pooltitle"><span className="pooltitleSpan">LARE / ETH</span></td>
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
                <td>6</td>
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
                <td>7</td>
                <td className="pooltitle"><span className="pooltitleSpan">BNB / BUSD</span></td>
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
                <td>8</td>
                <td className="pooltitle"><span className="pooltitleSpan">LARE / BNB</span></td>
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
                <td>9</td>
                <td className="pooltitle"><span className="pooltitleSpan">LARE / SOL</span></td>
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
                <td>10</td>
                <td className="pooltitle"><span className="pooltitleSpan">LARE / DOGE</span></td>
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
                <td>11</td>
                <td className="pooltitle"><span className="pooltitleSpan">LARE / SHIBA</span></td>
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
                <td>12</td>
                <td className="pooltitle"><span className="pooltitleSpan">LARE / MATIC</span></td>
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
                <td>13</td>
                <td className="pooltitle"><span className="pooltitleSpan">LARE / LTC</span></td>
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
                <td>14</td>
                <td className="pooltitle"><span className="pooltitleSpan">LARE / ATOM</span></td>
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
                <td>15</td>
                <td className="pooltitle"><span className="pooltitleSpan">LARE / TRX</span></td>
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
                <td>16</td>
                <td className="pooltitle"><span className="pooltitleSpan">LARE / XLM</span></td>
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
                <td>17</td>
                <td className="pooltitle"><span className="pooltitleSpan">LARE / XMR</span></td>
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
                <td>18</td>
                <td className="pooltitle"><span className="pooltitleSpan">BTC / ETH</span></td>
                <td>268.252102552</td>
                <td>64</td>
                <td>99.200555 BNB</td>
                <td>37.2% </td>
                <td><button className="collapsible">Details</button></td>
            </tr>
            <tr className='content'>
                <td><button>View Pool</button></td>
                <td><button>See Contract</button></td>
            </tr>
          </tbody>
        </table>

       </div>
  );
}