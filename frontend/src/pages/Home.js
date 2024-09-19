// src/pages/Home.js
import React from 'react';
import '../styles/style.css'; // Importa o CSS global
import { Link } from 'react-router-dom'; // Para navegação entre páginas
import logo from '../imagens/Website/SITE OPÇÃO 7.png'; // Importa o logo

// Página inicial com cabeçalho, navegação e conteúdo principal
const Home = () => {
  return (
    <div>
      {/* Cabeçalho */}
      <header>
        <div className="logo">
          <img src={logo} alt="Logo do Cat Nanny by Xumeg" />
        </div>
      </header>

      {/* Seção Principal */}
      <section className="hero">
        <div className="hero-content">
          <h2>Bem-vindo ao Cat Nanny by Xumeg</h2>
          <p>"Cuidando do Seu Gatinho com o Mesmo Amor que Dedicamos à Xumeg"</p>
          <p>
            Transforme a forma como você cuida do seu gatinho com o Cat Nanny by Xumeg.
            Oferecemos um serviço personalizado de cat sitting, onde o carinho e a segurança
            são prioridades. Conecte-se com cuidadores apaixonados e experientes que tratam
            cada felino como um membro da família.
          </p>
          <Link to="/cuidados" className="btn">Saiba Mais</Link> {/* Botão para a página de Cuidados */}
        </div>
      </section>

      {/* Rodapé */}
      <footer>
        {/* Você pode adicionar conteúdo como links de contato, copyright ou redes sociais */}
        
      </footer>
    </div>
  );
};

export default Home;
