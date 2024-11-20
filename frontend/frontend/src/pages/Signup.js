import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { name, email, password, username };

    try {
      let res = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      let data = await res.json();
      console.log(data);

      if (data.message === 'success') {
        alert('User Created successfully');
        navigate('/login');
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error('Error during signup:', err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f4f4f4] flex justify-center items-center">
      <form onSubmit={handleSubmit} className="form">
        <h3 className="text-[25px] text-center mt-3 mb-5">Sign Up</h3>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="inputbox">
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            id="username"
            name="username"
            placeholder="Username"
          />
        </div>

        <div className="inputbox">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
        </div>

        <div className="inputbox">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
          />
        </div>

        <div className="inputbox">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>

        <button className="btnBig mt-3 mb-3">Sign Up</button>
        <p>
          Already Have An Account?{' '}
          <Link to="/login" className="text-[#F57E57]">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
