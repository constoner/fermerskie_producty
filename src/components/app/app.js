import React from 'react';
import { GlobalStyle } from './style';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import heroContent from '../../mocks/hero-content'
import featuresList from '../../mocks/features-list';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper hero={heroContent} featuresList={featuresList} />
    </>
  );
}

export default App;
