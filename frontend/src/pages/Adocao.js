import React from 'react';
import { Link } from 'react-router-dom'; // Para navegação se necessário
import '../styles/style.css'; // Certifique-se de que o CSS seja importado corretamente

const Adocao = () => {
    return (
        <div>
            {/* Cabeçalho */}
            <header>
                <div className="logo">
                    
                </div>
           
            {/* Navegação */}
            
        
            {/* Seção de Contato */}
            <section className="contato">
                <h3>Entre em Contato Conosco</h3>
                <p>Estamos aqui para ajudar você com qualquer dúvida ou necessidade. Entre em contato conosco através dos seguintes meios:</p>
                <ul>
                    <li>Email: <a href="mailto:contato@catnanny.com">contato@catnanny.com</a></li>
                    <li>Telefone: (11) 1234-5678</li>
                    <li>Endereço: Rua Exemplo, 123, São Paulo, SP</li>
                </ul>
            </section>
            </header>

            {/* Seção de Adaptação com Outros Gatos */}
            <section className="adocao">
                <h2>Adaptação de Gatos com Outros Animais</h2>
                <p>A introdução de um novo gato em um lar com outros felinos exige paciência e planejamento. Aqui estão algumas dicas essenciais:</p>
                <div className="adocao-tips">
                    <ul>
                        <li><strong>Separação Inicial:</strong> Ao trazer um novo gato para casa, mantenha-o separado dos outros gatos por alguns dias.</li>
                        <li><strong>Troca de Cheiros:</strong> Troque roupas de cama ou panos entre os gatos para que eles se acostumem com o cheiro um do outro antes de se encontrarem pessoalmente.</li>
                        <li><strong>Reuniões Supervisionadas:</strong> Quando for o momento certo, permita que os gatos se vejam, mas sempre sob supervisão e em um ambiente controlado.</li>
                        <li><strong>Reforço Positivo:</strong> Ofereça petiscos e recompensas quando os gatos estiverem calmos e relaxados na presença um do outro.</li>
                        <li><strong>Tempo e Paciência:</strong> A adaptação pode levar semanas ou até meses, então tenha paciência e respeite o ritmo de cada animal.</li>
                    </ul>
                </div>
            </section>

            {/* Rodapé */}
            <footer>
                <p>&copy; 2024 Cat Nanny - Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default Adocao;
