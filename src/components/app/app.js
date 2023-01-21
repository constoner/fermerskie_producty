import React from 'react';
import './style.css';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
// import featureList from './mocks/features-list'
import heroContent from '../../mocks/hero-content'

function App() {
  return <PageWrapper hero={heroContent} />;
}

export default App;
