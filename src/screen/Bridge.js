import React, { useState } from 'react';
import Select from 'react-select'

export default function Bridge() {

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

        const options3 = [
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

  return (
       <div className="home bridge">
           <div>
            <label>From</label>
            <Select options={options} />
           </div>
           <div>
            <label>To</label>
            <Select options={options} />
           </div>
           <div>
             <label>Choose</label>
             <Select options={options} />
           </div>
       </div>
  );
}