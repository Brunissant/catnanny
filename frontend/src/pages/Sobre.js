// src/pages/Sobre.js
import React from 'react';
import '../styles/style.css'; // Importa o CSS
import { Link } from 'react-router-dom'; // Para navegação

// Página Sobre Nós
const Sobre = () => {
  return (
    <div>
      {/* Cabeçalho */}
      <header>
        <div className="logo">
          <img src="/imagens/Website/SITE_OPCAO_7.png" alt="Cat Nanny Logo" />
        </div>
      </header>

      {/* Navegação */}
      <nav>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
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

      {/* Seção Sobre */}
      <section className="sobre">
        <h2>Sobre a Cat Nanny</h2>
        <p>Cat Nanny by Xumeg é um aplicativo inovador de serviço de cat sitting, projetado para oferecer aos donos de gatinhos a paz de espírito, sabendo que seus pets estão sendo cuidados com carinho e profissionalismo.</p>

        <h3>Missão</h3>
        <p>Oferecer um serviço de cat sitting que una afeto e segurança, proporcionando tranquilidade e confiança aos pais de gatinhos.</p>

        <h3>Visão</h3>
        <p>Ser a principal escolha para pais de gatinhos, combinando amor genuíno, profissionalismo e um toque pessoal em cada interação.</p>

        <h3>Valores</h3>
        <p>Carinho: Proporcionar um cuidado afetuoso e atencioso, tratando cada gato como se fosse parte da família.</p>
        <p>Confiança: Estabelecer uma relação de confiança sólida com os donos de gatos.</p>
        <p>Aconchego: Criar um ambiente seguro e acolhedor para os gatinhos.</p>

        {/* Seção de Contato */}
        <section className="contato">
          <h3>Entre em Contato Conosco</h3>
          <p>Estamos aqui para ajudar você com qualquer dúvida ou necessidade:</p>
          <ul>
            <li>Email: <a href="mailto:contato@catnanny.com">contato@catnanny.com</a></li>
            <li>Telefone: (11) 1234-5678</li>
            <li>Endereço: Rua Exemplo, 123, São Paulo, SP</li>
          </ul>
        </section>
      </section>

      {/* Rodapé */}
      <footer>
      
      </footer>
    </div>
  );
};

export default Sobre;
