import React from 'react';
import './style.css';
import {Title, TitleSize} from '../../ui/title/title';
import Button from '../../ui/button/button';
import FeatureCard from '../../ui/feature-card/feature-card';

function selectFeatureByType (features, type) {
    return features.map((featureItem) => (
        featureItem.type === type ? (<>
            <li className="features__item" key={featureItem.id}>
                <FeatureCard {...featureItem} />
            </li>
        </>) : null
        )                            
    )
}

function Features ({featuresList}) {
    return (
        <>
            {featuresList?.length ? (
                <section className='features'>
                    <Title className='features__title' size={TitleSize.MEDIUM}>Почему фермерские продукты лучше?</Title>
                    <div className="features__wrapper">
                        <ul className="features__list features__list--farm">
                            {selectFeatureByType(featuresList, 'farm')}
                        </ul>
                        <ul className="features__list features__list--shop">
                            {selectFeatureByType(featuresList, 'shop')}
                        </ul>
                    </div>
                    <Button className='features__button' size={260}>Купить</Button>
                </section>
            ) : null}
        </>
    );
}

export default Features;