import { useState } from 'react';
import axios from 'axios';

function BalanceForm() {
  const [ownerAddress, setOwnerAddress] = useState('');
  const [balances, setBalances] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/balance', {
        limit: 1000,
        offset: 0,
        ordering: 'amountdescending',
        ownerAddress: ownerAddress
      });
      setBalances(response.data);
    } catch (error) {
      console.error(error);
      setBalances([]);
    }
  };

  return (
    <div className='text-white'>
      <form onSubmit={handleSubmit}>
        <label>
          Owner Address:
          <input type="text" value={ownerAddress} onChange={(e) => setOwnerAddress(e.target.value)} 
          className='text-black'/>
        </label>
        <button type="submit">Get Balances</button>
      </form>
      {balances.length > 0 ? (
        <ul>
          {balances.map((balance) => (
            <li key={balance.id}>
              {balance.token_symbol}: {balance.amount}
            </li>
          ))}
        </ul>
      ) : (
        <p>No balances found for this owner address.</p>
      )}
    </div>
  );
}

export default BalanceForm;
