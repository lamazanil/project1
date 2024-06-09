import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
      <nav>
        <div className="logo">
          <img src="/image/logo.webp" alt="" />
        </div>
        <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/About"}>About</Link>
            <Link to={"/Location"}>Location</Link>
           <Link to={"/Contact"}>Contact</Link>
        </ul>
        <button className='btn-log'>LogIn</button>

      </nav>
  )
}
