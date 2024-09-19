import React from 'react';
import { Link } from 'react-router-dom'; // Para navegação se necessário
import '../styles/style.css'; // Certifique-se de que o CSS esteja corretamente vinculado

const Alimentacao = () => {
    return (
        <div>
            {/* Cabeçalho */}
            <header style={{
                backgroundColor: '#ff6f61',
                color: '#fff',
                padding: '10px 0',
                textAlign: 'center',
                backgroundImage: 'url(/imagens/Website/SITE_OPCAO_7.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="logo">
                    
                </div>
            

            {/* Navegação */}
            
            {/* Conteúdo Principal */}
            <main>
                <section id="alimentacao" className="content">
                    <h2>Alimentação Saudável para Gatos</h2>
                    {/* Adicione aqui o conteúdo sobre alimentação saudável para gatos */}
                </section>
            </main>
            </header>
            {/* Rodapé */}
            <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px 0', marginTop: '20px' }}>
                <p>&copy; 2024 CatNanny by Xumeg. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};

export default Alimentacao;
