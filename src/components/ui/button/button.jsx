import React from 'react';
import './style.css';

function Button ({className, size, children}) {
    return (
        <button className={`${className ? `${className} ` : ''}button`} type='button' style={{minWidth: size}}>{children}</button>
    )
}

export default Button;