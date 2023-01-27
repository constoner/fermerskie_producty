import React from 'react';
import './style.css';
import Button from '../../ui/button/button';

function Nav ({className}) {
    return (
        <nav className={`${className}`}>
            <Button
                className='header__button'
                minWidth={260}
                link='./order.html'
            >
                Купить
            </Button>
        </nav>
    );
}

export default Nav;