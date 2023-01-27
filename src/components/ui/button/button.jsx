import React from 'react';
import { StyledButton } from './style.js';

function Button ({className, minWidth, link, children}) {
    return (
        <StyledButton
            className={className}
            minWidth={minWidth}
            {...(link ? {as:'a', href: link} : {type: 'button'})}
        >
            {children}
        </StyledButton>
    )
}

export default Button;