import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Invalid email format.');
      return;
    }

    setError('');
    navigate('/Account'); // Navigate on successful validation
  };

  return (
    <div className='w-full flex flex-col justify-start h-screen max-w-md p-6 bg-[#F7F8F9]  shadow-md' >
      <div className="">
        <h2 className="text-[28px] font-medium text-[#1D2226] w-3/5 text-left">
          Sign in to your PopX Account
        </h2>
        <p className="text-[#1D2226] text-[18px] font-normal w-4/5 opacity-60 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <form className="my-7" onSubmit={handleLogin}>
          <div className="relative my-4">
            <label
              htmlFor="email"
              className="absolute left-3 bg-[#F7F8F9] text-xs -top-1 text-[#6C25FF] transition-all duration-300"
            >
              Email Address
            </label>
            <input
              id="email"
              className="w-full px-3 py-3 mt-1 border-[1px] rounded-md border-[#CBCBCB] bg-[#F7F8F9] placeholder-[#919191] focus:outline-none focus:ring-1 focus:ring-[#6C25FF]"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative my-4">
            <label
              htmlFor="password"
              className="absolute left-3 bg-[#F7F8F9] text-xs -top-1 text-[#6C25FF] transition-all duration-300"
            >
              Password
            </label>
            <input
              id="password"
              className="w-full  bg-[#F7F8F9] px-3 py-3 placeholder-[#919191] mt-1 border-[1px] rounded-md border-[#CBCBCB] focus:outline-none focus:ring-1 focus:ring-[#6C25FF]"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-[#DD4A3D] text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full mt-4 py-3 text-white font-medium bg-[#6C25FF] hover:bg-[#6e25ff85] rounded-lg cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
