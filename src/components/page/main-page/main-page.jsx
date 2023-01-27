import React from 'react';
// import Hero from '../../block/hero/hero';
import Features from '../../block/features/features';

function MainPage({...prop}) {
    return (
        <>    
            {/* <Hero {...prop}/> */}
            <Features {...prop} />
        </>
    );
}

export default MainPage;