import React from 'react';
import './style.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import MainPage from '../../page/main-page/main-page';

function PageWrapper({...prop}) {
    return (
        <>    
            <Header />
            <main className='main-promo'>
                <MainPage {...prop}/>
            </main>
            <Footer/>
        </>
    );
}

export default PageWrapper;