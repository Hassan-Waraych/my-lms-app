import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';

const Header = () => {
    const headerStyle = {
        display: 'flex',
        color: 'white',
        margin: '0',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#004080'
    };

    const navStyle = {
        backgroundColor: '003366',
        flex: '1',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-around',
    };

  return (
    <header style={headerStyle}>
        <div>
            <img src={logo} alt='LMS Logo' style={{height: '50px'}} />
        </div>
        <nav style={navStyle}>
            <Link to='/'>Home Page</Link>
            <Link to='/'>Courses</Link>
            <Link to='/'>Login</Link>
        </nav>

    </header>
  )
}

export default Header

