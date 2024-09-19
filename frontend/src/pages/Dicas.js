// src/pages/Sobre.js
import React from 'react';
import '../styles/style.css'; // Importa o CSS uma vez
import { Link } from 'react-router-dom'; // Para navegação
import logo from'../imagens/Website/SITE OPÇÃO 7.png'

// Página Sobre Nós
  function Sobre() {
    return (
      <div>
        {/* Cabeçalho */}
        <header>
          <div className="logo">
           
          </div>
        

        {/* Navegação */}
       
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
        </header>
        {/* Rodapé */}
        <footer>
          
        </footer>
      </div>
    );
  }

export default Sobre;
