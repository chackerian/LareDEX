import React, { useState } from 'react';

export default function Pools() {

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
              <table className="pooltable">
                <tbody>
                  <tr>
                    <th>Coin Pair</th>
                    <th>Total amount staked</th>
                    <th># of MM</th>
                    <th># of Transactions%</th>
                    <th>APY % (Rewards)</th>
                    <th>Add Liquidity</th>
                  </tr>
                <tr>
                    <td className="pooltitle">LARE / HBAR</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td><button>Add Liquidity</button></td>
                </tr>
                <tr>
                    <td className="pooltitle">LARE / ONE</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td><button>Add Liquidity</button></td>
                </tr>
                <tr>
                    <td className="pooltitle">LARE / BTC</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td><button>Add Liquidity</button></td>
                </tr>
                <tr>
                    <td className="pooltitle">BTC / USDT</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td><button>Add Liquidity</button></td>
                </tr>
                <tr>
                    <td className="pooltitle">LARE / ETH</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td><button>Add Liquidity</button></td>
                </tr>
                <tr>
                    <td className="pooltitle">LUSD / USDC</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td><button>Add Liquidity</button></td>
                </tr>
                <tr>
                    <td className="pooltitle">BNB / BUSD</td>
                    <td>Zebra Coin</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td><button>Add Liquidity</button></td>
                </tr>
                <tr>
                    <td className="pooltitle">LARE / BNB</td>
                    <td>Zebra Coin</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td><button>Add Liquidity</button></td>
                </tr>
                <tr>
                    <td className="pooltitle">LARE / SOL</td>
                    <td>Zebra Coin</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td><button>Add Liquidity</button></td>
                </tr>
                <tr>
                    <td className="pooltitle">LARE / DOGE</td>
                    <td>Zebra Coin</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td><button>Add Liquidity</button></td>
                </tr>
                <tr>
                    <td className="pooltitle">LARE / SHIBA</td>
                    <td>Zebra Coin</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td><button>Add Liquidity</button></td>
                </tr>
                <tr>
                    <td className="pooltitle">LARE / MATIC</td>
                    <td>Zebra Coin</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td><button>Add Liquidity</button></td>
                </tr>
                <tr>
                    <td className="pooltitle">LARE / LTC</td>
                    <td>Zebra Coin</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td><button>Add Liquidity</button></td>
                </tr>
                <tr>
                    <td className="pooltitle">LARE / ATOM</td>
                    <td>Zebra Coin</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td><button>Add Liquidity</button></td>
                </tr>
                <tr>
                    <td className="pooltitle">LARE / TRX</td>
                    <td>Zebra Coin</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td><button>Add Liquidity</button></td>
                </tr>
                <tr>
                    <td className="pooltitle">LARE / XLM</td>
                    <td>Zebra Coin</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td><button>Add Liquidity</button></td>
                </tr>
                <tr>
                    <td className="pooltitle">LARE / XMR</td>
                    <td>Zebra Coin</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td><button>Add Liquidity</button></td>
                </tr>
                <tr>
                    <td className="pooltitle">BTC / ETH</td>
                    <td>Zebra Coin</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td><button>Add Liquidity</button></td>
                </tr>
              </tbody>
            </table>

       </div>
  );
}