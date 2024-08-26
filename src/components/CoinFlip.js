import React, { useState } from 'react';
import './CoinFlip.css';
import headsImage from '../assets/heads.png'; // Add the image path
import tailsImage from '../assets/tails.png'; // Add the image path
import flipSound from '../assets/flip.mp3'; // Add the sound path
import winSound from '../assets/win.mp3'; // Add the sound path

function CoinFlip({ balance, setBalance }) {
  const [betAmount, setBetAmount] = useState(0);
  const [selectedSide, setSelectedSide] = useState('');
  const [result, setResult] = useState(null);
  const [flipping, setFlipping] = useState(false);
  const [message, setMessage] = useState('');

  const flipCoin = () => {
    if (betAmount > balance) {
      alert('Insufficient balance');
      return;
    }

    // Play flip sound
    const flipAudio = new Audio(flipSound);
    flipAudio.play();

    setFlipping(true);
    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? 'heads' : 'tails';
      setResult(outcome);
      setFlipping(false);

      if (outcome === selectedSide) {
        setBalance(balance + betAmount);

        // Play win sound
        const winAudio = new Audio(winSound);
        winAudio.play();

        setMessage(`You won! Your new balance is ${balance + betAmount}`);
      } else {
        setBalance(balance - betAmount);
        setMessage(`You lost! Your new balance is ${balance - betAmount}`);
      }
    }, 2000); // Duration of the flip animation
  };

  const withdrawBalance = () => {
    setMessage(`Withdrawing ${balance} tokens`);
    setBalance(0);
  };

  return (
    <div className="coin-flip">
      <h2>Balance: {balance} tokens</h2>
      <div className="bet-form">
        <div>
          <label>Bet Amount:</label>
          <input 
            type="number" 
            value={betAmount} 
            onChange={(e) => setBetAmount(Number(e.target.value))} 
          />
        </div>
        <div>
          <label>Select Side:</label>
          <div className="coin-selection">
            <img 
              src={headsImage} 
              alt="Heads" 
              className={`coin ${selectedSide === 'heads' ? 'selected' : ''}`} 
              onClick={() => setSelectedSide('heads')}
            />
            <img 
              src={tailsImage} 
              alt="Tails" 
              className={`coin ${selectedSide === 'tails' ? 'selected' : ''}`} 
              onClick={() => setSelectedSide('tails')}
            />
          </div>
        </div>
      </div>
      <button onClick={flipCoin} disabled={flipping}>Flip Coin</button>
      <button onClick={withdrawBalance} disabled={flipping}>Withdraw Balance</button>
      {flipping && <div className="coin-animation">Flipping...</div>}
      {result && !flipping && <p className="result">Result: {result}</p>}
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default CoinFlip;