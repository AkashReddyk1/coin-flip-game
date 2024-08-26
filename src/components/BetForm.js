import React, { useState } from 'react';
import './BetForm.css';

function BetForm({ balance, setBetAmount, setSelectedSide }) {
  const [amount, setAmount] = useState(0);
  const [side, setSide] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount > balance) {
      alert('Insufficient balance');
      return;
    }
    setBetAmount(amount);
    setSelectedSide(side);
  };

  return (
    <form onSubmit={handleSubmit} className="bet-form">
      <div>
        <label>Bet Amount:</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(Number(e.target.value))} 
        />
      </div>
      <div>
        <label>Select Side:</label>
        <select value={side} onChange={(e) => setSide(e.target.value)}>
          <option value="">Select</option>
          <option value="heads">Heads</option>
          <option value="tails">Tails</option>
        </select>
      </div>
      <button type="submit">Place Bet</button>
    </form>
  );
}

export default BetForm;