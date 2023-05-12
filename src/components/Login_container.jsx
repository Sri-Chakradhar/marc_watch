import React from "react";
import Input from "postcss/lib/input";

const Logbox = () => {
  return (
    <div name="Login" className="bg-white">
      <div>
        <input className="" name="Username" type="text">Username</input>
      </div>
      <div>
        <input name="password" type="password">Passord</input>
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Logbox;
