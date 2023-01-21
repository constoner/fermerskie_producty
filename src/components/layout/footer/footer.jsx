import React from 'react';
import './style.css';
import Logo from '../../ui/logo/logo';

function Footer () {
    return (
        <footer className='footer'>
            <Logo className='footer__logo'/>
            <span className='footer__credit'>Создано 2021</span>
        </footer>
    );
}

export default Footer;