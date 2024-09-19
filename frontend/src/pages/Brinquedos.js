import React from 'react';
import { Link } from 'react-router-dom'; // Para navegação interna
import '../styles/style.css'; // Importar o arquivo CSS se necessário

const Brinquedos = () => {
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
            </header>

            {/* Navegação */}
            

            {/* Conteúdo Principal */}
            <main>
                <section id="brinquedos" className="content">
                    <h2>Brinquedos e Enriquecimento Ambiental</h2>
                    <ul>
                        <li><strong>Preferências Individuais:</strong> Observe quais brinquedos e atividades seu gato mais gosta e ajuste o ambiente de acordo com essas preferências.</li>
                        <li><strong>Comportamentos:</strong> Fique atento a comportamentos que possam indicar estresse ou tédio e ajuste o ambiente conforme necessário.</li>
                    </ul>

                    <h3>Ideias e Sugestões para Criação de Conteúdo</h3>
                    <h4>Blogs e Sites de Pet Care</h4>
                    <ul>
                        <li><strong>Guias e Tutoriais:</strong> Crie guias sobre como montar ambientes enriquecidos e tutoriais de brinquedos caseiros.</li>
                        <li><strong>Resenhas de Produtos:</strong> Publique resenhas e recomendações de brinquedos e acessórios para gatos.</li>
                    </ul>

                    <h4>Redes Sociais</h4>
                    <ul>
                        <li><strong>Conteúdo Visual:</strong> Poste fotos e vídeos do seu gato brincando com diferentes brinquedos e explorando o ambiente.</li>
                        <li><strong>Dicas e Truques:</strong> Compartilhe dicas de enriquecimento e truques para manter os gatos engajados e felizes.</li>
                    </ul>

                    <h4>YouTube</h4>
                    <ul>
                        <li><strong>Vídeos Educativos:</strong> Produza vídeos que mostrem como criar brinquedos caseiros ou montar áreas de enriquecimento para gatos.</li>
                        <li><strong>Desafios e Jogos:</strong> Crie desafios de brincadeiras e jogos interativos que envolvam seu gato.</li>
                    </ul>

                    <h4>Comunidades Online</h4>
                    <ul>
                        <li><strong>Fóruns e Grupos:</strong> Participe de fóruns e grupos dedicados a cuidados com gatos e compartilhe suas experiências e sugestões.</li>
                        <li><strong>Consultoria e Ajuda:</strong> Ofereça conselhos personalizados sobre como melhorar o ambiente dos gatos em discussões online.</li>
                    </ul>

                    <h3>Exemplos de Brinquedos e Recursos para Gatos</h3>
                    <ul>
                        <li><strong>Brinquedos de Puzzle:</strong> Brinquedos que desafiam o gato a resolver problemas para obter uma recompensa são ótimos para estimulação mental. Exemplos incluem quebra-cabeças com petiscos escondidos.</li>
                        <li><strong>Brinquedos de Varinha:</strong> Brinquedos com penas ou fitas presas a uma corda são ideais para brincadeiras interativas e exercícios.</li>
                        <li><strong>Estruturas de Escalada:</strong> Arranhadores e estruturas de escalada oferecem uma maneira divertida e saudável para o gato se exercitar.</li>
                        <li><strong>Catnip e Ervas:</strong> Catnip (erva-dos-gatos) e outras ervas podem ser usadas para enriquecer brinquedos e áreas de descanso.</li>
                        <li><strong>Feeder Toys:</strong> Brinquedos que dispensam ração ou petiscos ajudam a estimular o instinto de caça do gato e promovem um comportamento alimentar saudável.</li>
                    </ul>
                </section>
            </main>
            

            {/* Rodapé */}
            <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px 0', marginTop: '20px' }}>
                <p>&copy; 2024 CatNanny by Xumeg. Todos os direitos reservados.</p>
            </footer>
        </div>
        
    );
};

export default Brinquedos;
