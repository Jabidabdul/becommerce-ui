import React from "react";
import "../form.css";

const LoginWithEmail = () => {
  return (
    <div className="email">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" placeholder="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="password" />
      <button>Sign in</button>
    </div>
  );
};

export default LoginWithEmail;
