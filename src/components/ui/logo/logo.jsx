import React from 'react';
import StyledLogo from './style.js';
import logo from '../../../assets/logo.svg'

function Logo ({className}) {
    return (
        <StyledLogo className={`logo ${className}`} href='/'>
            <img className='logo__image' src={logo} width={44} height={44} alt='Логотип магазина.' />
            <span className='logo__text'>Фермерские продукты</span>
        </StyledLogo>
    );
}

export default Logo;