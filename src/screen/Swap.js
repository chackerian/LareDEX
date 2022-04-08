import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
import Duration from './Duration.js'
import Select from 'react-select'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import larecoin from '../larecoin.png'
import bnb from '../bnb.png'

  const options = [
    { value: 'chocolate', label: 'HBAR' },
    { value: 'strawberry', label: 'ONE' },
    { value: 'vanilla', label: 'BTC' },
    { value: 'strawberry', label: 'USDT' },
    { value: 'strawberry', label: 'USDC' },
    { value: 'strawberry', label: 'LUSD' },
    { value: 'strawberry', label: 'BUSD' },
    { value: 'strawberry', label: 'ETH' },
    { value: 'strawberry', label: 'BNB' },
    { value: 'strawberry', label: 'SOL' },
    { value: 'strawberry', label: 'DOGE' },
    { value: 'strawberry', label: 'SHIBA' },
    { value: 'strawberry', label: 'MATIC' },
    { value: 'strawberry', label: 'LTC' },
    { value: 'strawberry', label: 'ATOM' },
    { value: 'strawberry', label: 'TRX' },
    { value: 'strawberry', label: 'XLM' },
    { value: 'strawberry', label: 'XMR' }
  ]
  const options2 = [
      { value: 'chocolate', label: 'USDC/Coinbase' },
      { value: 'strawberry', label: 'USDT' },
      { value: 'vanilla', label: 'LUSD' },
      { value: 'strawberry', label: 'Debit / Credit' },
      { value: 'strawberry', label: 'Bank Transfer' }
    ]
export default function Swap() {


    document.title = "DEX | Swap | Larecoin"
    var now = new Date()
    var time = String(now)
    var time = time.split(":")[0]

  return (
       <div className="home">
       <div className="swaplabeldiv"><h2 className="swaplabel">SWAP</h2></div>
       <div className="swap">
         <div className="swapLeft">
           <img src={bnb} /><img src={larecoin} className="lareimg" /><span style={{color: 'white'}}>BNB / LARE</span>
           <FontAwesomeIcon icon={faArrowRightArrowLeft} className="arrows" />
           <span className="swapLink">Basic</span>
           <span className="swapLink">TradingView</span>
           <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} className="expand" />
           <div className="swapNumber">
            <div>
             <h1 style={{fontFamily: 'Raleway'}}>1,391,924,422.94</h1>
             <span>BNB/LARE</span><span className="percentChange">+55807478 (66.28%)</span>
            </div>
            <div>
             <form>
              <div className="radio-group">
                <input type="radio" id="option-one" name="selector" />
                <label for="option-one">24H</label><input type="radio" id="option-two" name="selector" />
                <label for="option-two">1W</label><input type="radio" id="option-three" name="selector" />
                <label for="option-three">1M</label><input type="radio" id="option-four" name="selector" />
                <label for="option-four">1Y</label>
              </div>
             </form>
            </div>
             <p>{time}</p>
              <Sparklines data={[5, 10, 5, 20]}>
                  <SparklinesLine color="#31d0aa" />
              </Sparklines>
           </div>
         </div>
         <div className="swapRight">
           <div className="swapHeader">
            <div style={{flex: '75%'}}>
             <h4>Swap</h4>
             <p>Trade <b>LARE</b> in an instant</p>
            </div>
            <div style={{flex: '20%'}} className="swapSettings">
               <FontAwesomeIcon icon={ faGear } />
               <FontAwesomeIcon icon={ faHistory } />
            </div>
           </div>
           <div className="swapForm">
             <Select options={options} />
             <input type="number" />
             <FontAwesomeIcon icon={ faCircleDown } className="convertIcon" />
             <Select options={options2} />
             <input type="number" />
             <button className="connectWalletButton">Connect Wallet </button>
           </div>
         </div>
         </div>
       </div>
  );
}