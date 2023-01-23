import React from 'react';
import './style.css';
import Logo from '../../ui/logo/logo';

function Footer () {
    return (
        <footer className='footer'>
            <Logo className='footer__logo'/>
            <a className='footer__credit' href='https://github.com/constoner/fermerskie_producty' target="_blank" rel='noreferrer'>Создано 2021</a>
        </footer>
    );
}

export default Footer;