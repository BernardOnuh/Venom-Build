"use client";

import Asset from './Tokens/asset';
import SearchPanel from './search';
import Balance from './Tokens/balance';
import { useState } from 'react';

const Overview = () => {
  const [balance, setBalance] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (balance) => {
    setBalance(balance);
  }

  return(
    <div>
      <SearchPanel onSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div>
      <Balance address={searchTerm} balance={balance}/>
      </div>
      <Asset/>
    </div>
  )
}

export default Overview;
