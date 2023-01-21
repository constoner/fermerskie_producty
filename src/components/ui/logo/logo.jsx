import React from 'react';
import './style.css';
import logo from '../../../assets/logo.svg';

function Logo ({className}) {
    return (
        <a className={`logo ${className}`} href='.'>
            <img className='logo__image' src={logo} width={44} height={44} alt='Логотип магазина.' />
            <span className='logo__text'>Фермерские продукты</span>
        </a>
    );
}

export default Logo;