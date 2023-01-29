import styled from 'styled-components';


const StyledTitle = styled.h2`
    margin: 0;
    font-family: ${(props) => props.theme.fontFamily};
    font-weight: 700;
    font-size: ${(props) => props.size.fontSize};
    line-height: ${(props) => props.size.lineHeight};
    color: ${(props) => props.theme.colorBlackText}; 
`;

export default StyledTitle;
