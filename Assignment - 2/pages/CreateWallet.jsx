import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Navbar from "../components/Navbar";

const CreateWallet = () => {
  const [wallet, setWallet] = useState({});

  const handleSetWallet = () => {
    const wallet = ethers.Wallet.createRandom();
    setWallet(wallet);
  };

  console.log(wallet);

  useEffect(handleSetWallet, []);

  return (
    <div>
      <Navbar />
      <div>
        <h3>Creating New Wallet Address</h3>
        <h4>Address : {wallet?.address}</h4>
      </div>
    </div>
  );
};

export default CreateWallet;
