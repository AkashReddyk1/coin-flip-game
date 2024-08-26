import React from 'react';
import './WalletConnect.css';

function WalletConnect({ walletConnected, setWalletConnected, setBalance }) {
  const connectWallet = async () => {
    // Simulate wallet connection
    setWalletConnected(true);
    setBalance(100); // Simulate balance
  };

  return (
    <div className="wallet-connect">
      {!walletConnected ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <p>Wallet Connected</p>
      )}
    </div>
  );
}

export default WalletConnect;