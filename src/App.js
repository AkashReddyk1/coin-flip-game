import React, { useState } from 'react';
import WalletConnect from './components/WalletConnect';
import CoinFlip from './components/CoinFlip';
import './App.css';

function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [balance, setBalance] = useState(100); // Initial balance for demonstration

  return (
    <div className="App">
      <h1>Coin Flip Game</h1>
      <WalletConnect 
        walletConnected={walletConnected} 
        setWalletConnected={setWalletConnected} 
        setBalance={setBalance}
      />
      {walletConnected && <CoinFlip balance={balance} setBalance={setBalance} />}
    </div>
  );
}

export default App;