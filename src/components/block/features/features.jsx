import React from 'react';
import './style.css';
import {Title, TitleSize} from '../../ui/title/title';
import Button from '../../ui/button/button';
import FeatureCard from '../../ui/feature-card/feature-card';

function selectFeatureByType (features, isBad = 'false') {
    return features.map((featureItem) => (
        featureItem.isBad === isBad ? (
            <li className="features__item" key={featureItem.id}>
                <FeatureCard {...featureItem} />
            </li>
            ) : null
        )                            
    )
}

function Features ({featuresList}) {
    return (
        <>
            {featuresList?.length ? (
                <section className='features'>
                    <Title className='features__title' level={2} size={TitleSize.MEDIUM}>Почему фермерские продукты лучше?</Title>
                    <div className="features__wrapper">
                        <ul className="features__list features__list--good">
                            {selectFeatureByType(featuresList, false)}
                        </ul>
                        <ul className="features__list features__list--bad">
                            {selectFeatureByType(featuresList, true)}
                        </ul>
                    </div>
                    <Button className='features__button' minWidth={260}>Купить</Button>
                </section>
            ) : null}
        </>
    );
}

export default Features;