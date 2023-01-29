import React from 'react';
import { StyledFooter, StyledCredits } from './style';
import Logo from '../../ui/logo/logo';

function Footer () {
    return (
        <StyledFooter className='footer'>
            <Logo className='footer__logo' link='./' />
            <StyledCredits className='footer__credits' href='https://github.com/constoner/fermerskie_producty' target="_blank" rel='noreferrer'>Создано 2021</StyledCredits>
        </StyledFooter>
    );
}

export default Footer;