import React from 'react';
import './style.css'
import Logo from '../../ui/logo/logo';
import Button from '../../ui/button/button';
import Nav from '../../layout/nav/nav';

function Header () {
    return (
        <header className="header">
            <Logo className='header__logo' />
            <Nav className='header__nav'>
                <Button size={260} className='header__button'>
                    Купить
                    </Button>
            </Nav>
        </header>
    );
}

export default Header;