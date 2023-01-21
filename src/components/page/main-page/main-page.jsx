import React from 'react';
// import './style.css';
import Hero from '../../block/hero/hero';

function MainPage({...prop}) {
    return (
        <>    
            <Hero {...prop}/>
            {/* <Features/> */}
        </>
    );
}

export default MainPage;