import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cuidados from './pages/Cuidados';
import Alimentacao from './pages/Alimentacao';
import Brinquedos from './pages/Brinquedos';
import Dicas from './pages/Dicas';
import Consultoria from './pages/Consultoria';
import Adocao from './pages/Adocao';
import Sobre from './pages/Sobre';
import NotFound from './pages/NotFound';
import '../src/styles/style.css';


//Componente principal da aplicação
function App() {
    return (
        <Router>
            {/*Cabeçalho e barra de navegação presentes em todas as páginas*/}
            <Header />
            <NavBar />
            {/*Definição das rotas da aplicação*/}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cuidados" element={<Cuidados />} />
                <Route path="/alimentacao" element={<Alimentacao />} />
                <Route path="/brinquedos" element={<Brinquedos />} />
                <Route path="/dicas" element={<Dicas />} />
                <Route path="/consultoria" element={<Consultoria />} />
                <Route path="/adocao" element={<Adocao />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
