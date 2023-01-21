import React from 'react';
import './style.css';

const TitleSize = {
    BIG: "big",
    MEDIUM: "medium",
    SMALL: "small"
  };

function setTitleClass ({className, size}) {
    const parentClass= className ? `${className} ` : '';
    const sizeModifier = size ? ` title--${size}` : '';
    return `${parentClass}title${sizeModifier}`;
}

function Title ({children, className, size}) {
    let title;
    const optionalClass = setTitleClass({className, size});
    
    switch (size) {
        case 'big':
            title = <h1 className={optionalClass}>{children}</h1>;
            break;
        case 'medium':
            title = <h2 className={optionalClass}>{children}</h2>;
            break;
        case 'small':
            title = <h3 className={optionalClass}>{children}</h3>;
            break;
        default:
            title = <h2 className={optionalClass}>{children}</h2>;
    }

    return (
        title
    );
}

export {Title, TitleSize};