import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    height: 100%;    
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: ${(props) => props.theme.fontLineHeghtDefault};
    font-style: normal;
    font-weight: 400;
    color: ${(props) => props.theme.colorBlackText};
    background-color: ${(props) =>  props.theme.colorBackgroundLite};
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
`;

export { GlobalStyle };