import React from 'react';
import './style.css';
import {Title, TitleSize} from '../../ui/title/title';
import Button from '../../ui/button/button';
import FeatureCard from '../../ui/feature-card/feature-card';

function Features ({featuresList}) {
    return (
        <>
            {featuresList?.length ? (
                <section className='features'>
                    <Title className='features__title' size={TitleSize.MEDIUM}>Почему фермерские продукты лучше?</Title>
                    <ul className="features__list">
                        {featuresList.map((featureItem) => (
                            <li className="features__item" key={featureItem.id}>
                                <FeatureCard {...featureItem} />
                            </li>
                            )
                        )}
                    </ul>
                    <Button className='features__button' size={260}>Купить</Button>
                </section>
            ) : null}
        </>
    );
}

export default Features;