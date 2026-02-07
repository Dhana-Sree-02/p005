import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='login-container'>
        <h2>Sign in with email</h2>
        <div className='input-group'>
          <img className='left-icon' src='' alt='' />
          <input type='text' placeholder='Enter your email' />
        </div>
        <div className='input-group'>
          <img className='left-icon' src='' alt='' />
          <input type='password' placeholder='Enter your password' />
          <img className='right-icon' src='' alt='' />
        </div>
        <div className='forgot-password'><label>Forgot Password</label>?</div>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default App;