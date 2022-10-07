import React from "react";
import { NavLink } from "react-router-dom";
import './header.css'

const Header = () => {
  return (
  <header className="header">
    <span className="name">BasesDuDev</span>
    <div className="navigation-wrapper">
    <nav className="navigation">
      <ul>
      <li><NavLink end className={({ isActive }) => (isActive ? 'active' : '')} to="/">Accueil</NavLink></li>
      <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/post">Publier</NavLink></li>
      <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/articles">Articles</NavLink></li>
      <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/wheather">Météo</NavLink></li>
      </ul>
    </nav>
    </div>
  
  </header>
  );
};

export default Header;