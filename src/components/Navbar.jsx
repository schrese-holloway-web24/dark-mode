import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';
import {Link} from 'react-router-dom';

const Navbar = ({history}) => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <Link to={'/'} ><h2 style={{cursor:'pointer', color: 'white', textDecoration:'none'}}>Home</h2></Link>
      <div className="dark-mode__toggle" onClick={toggleMode}>
        <div
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
