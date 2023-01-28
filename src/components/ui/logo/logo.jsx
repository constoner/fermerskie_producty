import React from 'react';
import { LogoSVG, StyledLogo } from './style.js';
// import  { ReactComponent as LogoSVG } from '../../../assets/logo.svg'

function Logo ({className, link}) {
    return (
        <StyledLogo className={`logo ${className}`} href={link}>
            <LogoSVG role="image" alt='Логотип магазина.' />
            <span>Фермерские продукты</span>
        </StyledLogo>
    );
}

export default Logo;