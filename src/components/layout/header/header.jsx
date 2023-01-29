import React from 'react';
import { StyledHeader } from './style';
import Logo from '../../ui/logo/logo';
import Nav from '../../layout/nav/nav';

function Header () {
    return (
        <StyledHeader className="header">
            <Logo className='header__logo' link="/" />
            <Nav className='header__nav' />
        </StyledHeader>
    );
}

export default Header;