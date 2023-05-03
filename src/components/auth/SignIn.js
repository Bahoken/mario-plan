import React from "react";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  return (
    <div className="container">
      <form className="white" onSubmit={this.handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={this.handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={this.handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
