import React, { useState } from 'react';
import Select from 'react-select'
import RadioButtons from './RadioButtons'

export default function Buy() {

    document.title = "DEX | Buy Crypto | Larecoin"

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


  return (
       <div className="home">
        <div className="swaplabeldiv"><h2 className="swaplabel">BUY CRYPTO</h2></div>
        <div className="buycrypto">
           <h2 style={{textAlign: "center"}}>Buy Crypto</h2>
            <p style={{textAlign: "center"}}>Buy Cryptocurrency in 2 Minutes or Less</p>
            <label>Select Coin to Buy</label>
            <Select options={options} />
            <label>Enter Amount to Buy</label>
            <input type="number" placeholder="USD" />
            <br />
            <RadioButtons />
            <label>Payment method</label>
            <Select options={options2} />
            <button>Confirm Purchase</button>
           </div>
       </div>
  );
}