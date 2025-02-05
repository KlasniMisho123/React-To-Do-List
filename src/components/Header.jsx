import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header-nav">
        <div></div>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</Link>
          </li>
          <li>
            <Link to="/to-do-list" className={({ isActive }) => (isActive ? 'active' : '')}>Todolist Page</Link>
          </li>
          <li>
            <Link to="/about us" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</Link>
          </li>
        </ul>
      </nav>
        <div> day </div>
    </header>
  );
}
