import React from 'react';
import './login.css';

function Login() {
  const register= () =>{};
  return (
    <div className="login">
      <img
        src="https://th.bing.com/th/id/OIP.G3ySuxO7raRe1WrViDi31wHaCA?pid=ImgDet&rs=1"
        alt=""
      />
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Profile Pic Url (Optional)" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Sign In</button>
      </form>
      <p>Not a member</p>
      <span className="login__register" onClick={register}>Register Now</span>
    </div>
  );
}

export default Login;