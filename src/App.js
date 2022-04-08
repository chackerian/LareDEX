import React, { useState, Image } from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import $ from 'jquery';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useNavigate
} from "react-router-dom";

import './App.css';

import Home from './screen/Home.js'
import Dashboard from './screen/Dashboard.js'
import Referrals from './screen/Referrals.js'
import Rewards from './screen/Rewards.js'
import LuckyDraw from './screen/LuckyDraw.js'
import Pools from './screen/Pools.js'
import Bonds from './screen/Bonds.js'
import Swap from './screen/Swap.js'
import Bridge from './screen/Bridge.js'
import Buy from './screen/Buy.js'
import Voting from './screen/Voting.js'
import Launchpad from './screen/Launchpad.js'

import Footer from './screen/Footer.js'

import { emailValidator } from './helpers/emailValidator'
import { passwordValidator } from './helpers/passwordValidator'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import logo from './logo.png'
import Logo from './logo.png';
import video from './video.mp4';
import visa from './visa.png';
import mastercard from './mastercard.png';
import paypal from './paypal.png';

const AuthorizationContext  = React.createContext();

function App() {

    const [show, setShow] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [user, setUser] = useState(null)

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleShowSignup = () => setShowSignup(true);
    const handleCloseSignup = () => setShowSignup(false);

    function login(a) {
      setUser(a)
    }

    function logout(){
      setUser(null)
    }

    function showLanguage(){
      $('.languages').toggle()
    }
  
  return (
    <div className="App">
      <video id="background-video" autoplay='' muted loop>
        <source src={video} type="video/mp4" />
      </video>

      <Router>
          <header className="NavBar">
              <div className='logoDiv'><Link to="/"><img src={Logo} className="logo" /></Link></div>
            <ul id="nav">
              <li><Link to="/ecosystem">Ecosystem</Link></li>
              <li><Link to="/laretokens">$LARE Tokens</Link></li>
              <li><Link to="/merchandise">Merchandise</Link></li>
              <li><Link to="/apply">Apply to List</Link></li>
              <li><Link to="/apply" className="connect">Connect</Link></li>
              <li onClick={showLanguage} className="lang">
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="43 43 114 114" viewBox="43 43 114 114" height="25" width="3em" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid-qkt1zze455h2"><title id="svgcid-qkt1zze455h2"></title><g><path d="M99.999 43C68.57 43 43 68.57 43 100s25.57 57 56.999 57S157 131.43 157 100s-25.572-57-57.001-57zm-48.587 57c0-1.723.094-3.427.27-5.106 4.069-3.703 12.211-7.377 23.652-9.638a145.705 145.705 0 0 0-.738 14.713c0 5.074.256 10.028.745 14.775-11.446-2.261-19.59-5.937-23.659-9.643a48.558 48.558 0 0 1-.27-5.101zm31.594-.031c0-5.772.341-11.121.918-16.046a137.8 137.8 0 0 1 16.046-.918c5.797 0 11.165.343 16.104.925.58 4.925.919 10.269.919 16.039 0 5.794-.341 11.161-.925 16.097-4.936.582-10.302.925-16.097.925-5.77 0-11.114-.339-16.039-.918a137.305 137.305 0 0 1-.926-16.104zm41.658-14.706c11.477 2.276 19.62 5.973 23.666 9.698a49.466 49.466 0 0 1 0 10.071c-4.047 3.728-12.191 7.427-23.67 9.701.486-4.742.745-9.692.745-14.764-.001-5.05-.257-9.977-.741-14.706zm20.937-2.038c-5.957-2.918-13.544-5.208-22.123-6.695-1.478-8.568-3.759-16.153-6.664-22.115 13.301 4.921 23.877 15.504 28.787 28.81zm-40.496-31.543c3.703 4.069 7.377 12.213 9.64 23.657a145.41 145.41 0 0 0-14.775-.745c-5.052 0-9.986.256-14.712.74 2.261-11.442 5.933-19.584 9.636-23.653 1.679-.176 3.382-.27 5.105-.27s3.427.095 5.106.271zm-21.921 2.731C80.281 60.372 78 67.955 76.522 76.521c-8.568 1.478-16.148 3.759-22.108 6.666 4.917-13.29 15.485-23.858 28.77-28.774zm-28.771 62.398c5.962 2.907 13.548 5.186 22.121 6.666 1.485 8.579 3.774 16.166 6.693 22.124-13.308-4.908-23.894-15.487-28.814-28.79zm40.552 31.518c-3.726-4.044-7.424-12.189-9.701-23.666 4.729.484 9.656.74 14.706.74 5.072 0 10.022-.259 14.764-.747-2.274 11.482-5.973 19.627-9.698 23.673a49.28 49.28 0 0 1-10.071 0zm21.809-2.728c2.921-5.96 5.208-13.549 6.693-22.135 8.586-1.485 16.177-3.772 22.134-6.693-4.912 13.319-15.506 23.914-28.827 28.828z" fill="#2F54DD" data-color="1"></path></g></svg>
              </li>
              <select className="languages">
                <option value="volvo">English</option>
                <option value="audi">Spanish</option>
                <option value="audi">French</option>
                <option value="audi">Arabic</option>
                <option value="audi">Italian</option>
                <option value="audi">Bengali</option>
                <option value="audi">Russian</option>
                <option value="audi">Portuguese</option>
                <option value="audi">Indonesian</option>
                <option value="audi">Japanese</option>
                <option value="audi">Korean</option>
                <option value="saab">Mandarin</option>
                <option value="mercedes">Hindi</option>
                <option value="audi">Turkish</option>
                <option value="audi">Vietnamese</option>
                <option value="audi">Thai</option>
                <option value="audi">Telugu</option>
                <option value="audi">Dutch</option>
              </select>
            </ul>
          </header>

          <div className="token">
            <span className="tokenAddress">Token Address: 0x02754b0c1f8c890ac150aefe376d186c810a71e2</span>
            <CopyToClipboard
             text="0x02754b0c1f8c890ac150aefe376d186c810a71e2"
             onCopy={() => alert("Copied")}>
               <span className="copyToken">Copy to clipboard</span>
            </CopyToClipboard>
          </div>

          <div className="dex">

              <div className="sideNavDiv">
                <p className="sideNav laredex">LARE DEX</p>
                <p className="sideNav menu">Menu</p>
                <p><Link to="/dashboard" className="sideNav">Dashboard</Link></p>
                <p><Link to="/referrals" className="sideNav">Referrals</Link></p>
                <p><Link to="/rewards" className="sideNav">Rewards</Link></p>
                <p><Link to="/luckydraw" className="sideNav">Lucky Draw</Link></p>
                <p><Link to="/pools" className="sideNav">Pools</Link></p>
                <p><Link to="/swap" className="sideNav">Swap</Link></p>
                <p><Link to="/bridge" className="sideNav">Bridge</Link></p>
                <p><Link to="/bonds" className="sideNav">Bonds</Link></p>
                <p><Link to="/buy" className="sideNav">Buy Crypto</Link></p>
                <img src={visa} /> <img src={mastercard} /> <img src={paypal} /> <span>ACH</span>
                <p><Link to="/voting" className="sideNav">Voting</Link></p>
                <p><Link to="/launchpad" className="sideNav">Launchpad</Link></p>
              </div>

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/referrals" element={<Referrals />} />
              <Route path="/rewards" element={<Rewards title="Rewards" />} />
              <Route path="/luckydraw" element={<LuckyDraw />} />
              <Route path="/pools" element={<Pools />} />
              <Route path="/bonds" element={<Bonds />} />
              <Route path="/swap" element={<Swap />} />
              <Route path="/bridge" element={<Bridge />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/voting" element={<Voting />} />
              <Route path="/launchpad" element={<Launchpad />} />
            </Routes>
          </div>

      </Router>

      <Footer />
    </div>
  );
}


export { 
  App as default 
}
