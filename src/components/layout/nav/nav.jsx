import React from 'react';
import './style.css';
import Button from '../../ui/button/button';

function Nav ({className}) {
    return (
        <nav className={`${className}`}>
            <Button size={260} className='header__button'>Купить</Button>
        </nav>
    );
}

export default Nav;