"use client";

import React from 'react';

function Balance({ address, balance }) {

  return (
    <div>
      {balance !== null && (
        <div className='bg-blue-600 text-white rounded-sm'>
          <div>Address: {address}</div>
          <div>Balance: {balance}</div>
        </div>
      )}
    </div>
  );
}

export default Balance;
