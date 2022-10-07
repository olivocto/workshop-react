import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
  <header>
    <span>BasesDuDev</span>
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/publish">Publier</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/wheather">Météo</Link>
    </nav>
  </header>
  );
};

export default Header;