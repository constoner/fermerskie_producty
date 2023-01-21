import React from 'react';
import './style.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Hero from '../../block/hero/hero';

function PageWrapper({...props}) {
    return (
        <>    
            <Header />
            <main className='main-promo'>
            <Hero {...props}/>
            {/* <Features/> */}
            </main>
            <Footer/>
        </>
    );
}

export default PageWrapper;