"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Asset = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/wallet')
      .then(response => {
        setAssets(response.data.assets);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 text-white">
      <div className="font-bold">Asset</div>
      <div className="font-bold">Balance</div>
      <div className="font-bold">Price</div>
      <div className="font-bold">Value</div>
      {assets.map(asset => (
        <React.Fragment key={asset.id}>
          <div>{asset.name}</div>
          <div>{asset.balance}</div>
          <div>{asset.price}</div>
          <div>{asset.balance * asset.price}</div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Asset;