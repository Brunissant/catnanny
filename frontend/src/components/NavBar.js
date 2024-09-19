import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Se houver estilos específicos para a barra de navegação

const NavBar = () => (
  <nav className="navbar">
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li className="dropdown">
        <a href="#" className="dropdown-toggle">Cuidados Felinos</a>
        <ul className="dropdown-menu">
          <li className="has-submenu">
            <Link to="/cuidados">Cuidados</Link>
            <ul className="submenu">
              <li><Link to="/alimentacao">Alimentação</Link></li>
              <li><Link to="/brinquedos">Brinquedos</Link></li>
              <li><Link to="/dicas">Dicas</Link></li>
            </ul>
          </li>
          <li><Link to="/consultoria">Consultoria</Link></li>
          <li><Link to="/adocao">Adaptação e Adoção</Link></li>
        </ul>
      </li>
      <li><Link to="/sobre">Sobre Nós</Link></li>
    </ul>
  </nav>
);

export default NavBar;
