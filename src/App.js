import './App.css';
import 'bulma/css/bulma.min.css';
import Web3 from 'web3';
import { useState,useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import Navbar from './Components/NavBar';
function App() {

  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
  });

  const [account, setAccount] = useState(null);

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        setWeb3Api({
          web3: new Web3(provider),
          provider,
        })
      } else {
        console.error("Please, install Metamask")
      }
    }
    loadProvider();
  }, []);

  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts[0]);
    }
    web3Api.web3 && getAccount();
  }, [web3Api.web3]);

  return (
    <div className="faucet-wrapper has-navbar-fixed-top">
      <div>

      <Navbar/>
      </div>

      {/* <div className="faucet">
        <div className="balance-view is-size-2">
          <p>Current Balance: <strong> 10 ETH</strong></p>
        </div>
        <button className="button is-primary mr-5 ml-5">Donate</button>
        <button className="button is-danger mr-5">Withdraw</button>
        <button className="button is-link" onClick={(() =>
          web3Api.provider.request({ method: "eth_requestAccounts"})
          )}>Connect Wallet</button>
        <span className="">
          <p>
            <strong>Accounts Addresses: </strong>
            {account ? account : "Account Denied"}
          </p>
        </span>
      </div> */}
      <p>lorem isum</p>
    </div>
  );
}

export default App;
