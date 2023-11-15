import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AuthenticatedNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <nav>
        <Link to="/goals">
          <button>Goals</button>
        </Link>

        <Link to="/journal">
          <button>Journal</button>
        </Link>

        <Link to="/progress">
          <button>Progress</button>
        </Link>

        <button onClick={logout}>Log Out</button>
      </nav>
    </div>
  );
};

const Navbar = () => {
  return localStorage.getItem('token') ? <AuthenticatedNavbar /> : null;
};

export default Navbar;
