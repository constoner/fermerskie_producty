import React from 'react';
import { StyledMain } from './style';
import Header from '../header/header';
import Footer from '../footer/footer';
import MainPage from '../../page/main-page/main-page';

function PageWrapper({...prop}) {
    return (
        <>    
            <Header />
            <StyledMain className='main-promo'>
                <MainPage {...prop}/>
            </StyledMain>
            <Footer/>
        </>
    );
}

export default PageWrapper;