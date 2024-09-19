import React from 'react';
import './Header.css'; // Se houver estilos específicos para o cabeçalho
import logo from'../imagens/Website/SITE OPÇÃO 7.png'
const Header = () => (
  <header>
    <div className="logo">
    <img src={logo} alt="Cat Nanny Logo" />
    </div>
  </header>
);

export default Header;
