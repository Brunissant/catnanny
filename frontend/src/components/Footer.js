import React from 'react';
import '../styles/Footer.css';
function Footer() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} CatNanny. Todos os direitos reservados.</p>
      </footer>
    );
}

export default Footer;
