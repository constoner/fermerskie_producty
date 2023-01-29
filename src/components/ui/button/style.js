import styled from 'styled-components';
import { Button } from '../../styled/';


export const StyledButton = styled(Button)`
    display: block;
    width: fit-content;
    min-width: ${(props) => props.minWidth}px;
    padding: 16.5px;
    font-weight: 700;
    text-align: center;
    background: ${(props) => props.theme.colorButton};
    color: ${(props) => props.theme.colorAccentText};;
    transition: all 0.1s ease-out;

    &:hover,
    &:active {
        background: ${(props) => props.theme.colorButtonHover};
        box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
    }

    &:active {
        box-shadow: none;
        transition: all 0.1s ease-out; 
    }
`;
