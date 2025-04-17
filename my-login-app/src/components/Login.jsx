import React from "react";

const Login = () => {
  return (
    <div className="myntra-login">
      <form>
        <h1>Your style journey begins now!</h1>
        <br />
        <p>Please Login To Your Account</p>
        <label>Email Id</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <div className="forgot">
          <label>
            <input type="checkbox" /> Keep me signed in
          </label>
          <a href="#">Forget Password?</a>
        </div>
        <button type="button" className="login">Login</button>
        <button type="button" className="signup">SignUp</button>
      </form>
      <div className="poster"></div>
    </div>
  );
};

export default Login;
