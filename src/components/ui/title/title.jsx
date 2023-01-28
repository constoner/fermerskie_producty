import React from 'react';
import StyledTitle from './style.js';

const TitleSize = {
    BIG: {name: "big", fontSize: '44px', lineHeight: '115%'},
    MEDIUM: {name: "medium", fontSize: '36px', lineHeight: '115%'},
    SMALL: {name: "small", fontSize: '18px', lineHeight: '150%'}
  };

function setTitleClass ({className, size}) {    
    return `${className ? `${className} ` : ''}title title--${size.name}`;
}

function Title ({children, className, level, size}) {
    return (
        <StyledTitle
            className={setTitleClass({className, size})}
            as={level ? `h${level}` : 'h2'}
            size={size}
        >
            {children}
        </StyledTitle>
    );
}

export {Title, TitleSize};