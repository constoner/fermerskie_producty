import React from 'react';
import "./style.css";
import { Title, TitleSize } from '../title/title';

function FeatureCard ({title, text, type, isBad, image}) {
    return (
        <article className={`feature-card${isBad ? ' feature-card--bad' : ''}`}>
            <Title className='feature-card__title' level={3} size={TitleSize.SMALL}>{title}</Title>
            <span className={`feature-card__type${isBad ? ' feature-card__type--bad' : ''}`}>{type}</span>
            <div className="feature-card__image" style={{backgroundImage: `url(${image})`}}></div>
            <p className="feature-card__text">{text}</p>
        </article>
        );
}

export default FeatureCard;