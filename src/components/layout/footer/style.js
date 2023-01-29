import styled from 'styled-components';
import { A } from '../../styled';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: ${(props) => props.theme.pageWidth};
    min-height: ${(props) => props.theme.minHeightHeaderFooter};
    margin: 0 auto;
    margin-top: auto;
    padding: 10px ${(props) => props.theme.pagePadding};
    background-color: ${(props) => props.theme.colorBackgroundLite};
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: -5px 20px 20px rgba(0, 0, 0, 0.04), 5px 20px 20px rgba(0, 0, 0, 0.04); 

`;

const StyledCredits = styled(A)`
    position: relative;
    color: inherit;
    text-decoration: none;
    transition: all 0.1s ease-out;

    &::after {
        position: absolute;
        left: 0;
        bottom: -2px;
        display: block;
        width: 100%;
        height: 1px;
        background-color: ${(props) => props.theme.colorBlackText};
        opacity: 0;
        content: "";
        transition: all 0.1s ease-out;
    }

    &:hover::after {
        opacity: 1;
    }
`;


export { StyledFooter, StyledCredits};