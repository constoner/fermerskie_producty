import React from 'react';
import "./style.css";
import { Title, TitleSize } from '../title/title';

function FeatureCard ({title, text, type, image}) {
    const cardOptions = {};
    switch (type) {
        case 'farm':
            cardOptions.cardColor = '#E1EDCE';
            cardOptions.tagColor = '#88AA4D';
            cardOptions.tagText = 'Фермерские продукты';
            break;
        case 'shop':
            cardOptions.cardColor = '#F8DDD7';
            cardOptions.tagColor = '#F75531';
            cardOptions.tagText = 'Магазинные продукты';
            break;
        default:
            cardOptions.cardColor = '#D8ECFE';
            cardOptions.tagText = '';
            break;
    }

    return (
        <article className="feature-card" style={{backgroundColor: cardOptions.cardColor}}>
            <Title className='feature-card__title' size={TitleSize.SMALL}>{title}</Title>
            <span className="feature-card__type" style={type ? {backgroundColor: cardOptions.tagColor} : {height: '25px'}}>{cardOptions.tagText}</span>
            <div className="feature-card__image" style={{backgroundImage: `url(${image})`}}></div>
            <p className="feature-card__text">{text}</p>
        </article>
        );
}

export default FeatureCard;