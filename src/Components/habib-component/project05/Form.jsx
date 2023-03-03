import React, { useState } from "react";
import LoginWithEmail from "./components/LoginWithEmail";
import LoginWithWallet from "./components/LoginWithWallet";
import "./form.css";

const Form = () => {
  const [pages, setPages] = useState(1);

  const DisplayPages = () => {
    if (pages === 1) {
      return <LoginWithWallet />;
    } else if (pages === 2) {
      return <LoginWithEmail />;
    }
  };

  const handleWallet = () => {
    setPages((curVal) => curVal - 1);
  };
  const handleEmail = () => {
    setPages((curVal) => curVal + 1);
  };

  return (
    <div className="form">
      <div className="top">
        <h5>TOKEN METRICS</h5>
        <p>Welcome</p>
      </div>
      <div className="center">
        <button onClick={handleWallet} disabled={pages === 1}>
          Login with wallet
        </button>
        <button onClick={handleEmail} disabled={pages === 2}>Login with email</button>
      </div>
      <div className="bottom">{DisplayPages()}</div>
    </div>
  );
};

export default Form;
