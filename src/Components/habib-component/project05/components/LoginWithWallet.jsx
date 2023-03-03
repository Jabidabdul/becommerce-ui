import React from "react";
import "./style.css";
import WalletIcon from "@mui/icons-material/Wallet";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import MasksIcon from "@mui/icons-material/Masks";
import { TextField } from "@mui/material";

const LoginWithWallet = () => {
  return (
    <div className="wallet">
      <span>
        To Login into your Token Metrics crypto asset
        <br />
        connect your Ethereum wallet
      </span>

      {/* <input type="text" placeholder="MetaMask" /> */}
      <TextField
        placeholder="MetaMask"
        InputProps={{
          startAdornment: <MasksIcon />,
        }}
      />

      <TextField
        placeholder="Wallet"
        InputProps={{
          startAdornment: <WalletIcon />,
        }}
      />

      {/* <input type="text" placeholder="Wallet" /> */}

      <TextField
        placeholder="CoinBase"
        InputProps={{
          startAdornment: <CurrencyRupeeIcon />,
        }}
      />

      {/* <input type="text" placeholder="CoinBase" /> */}
    </div>
  );
};

export default LoginWithWallet;
