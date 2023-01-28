import styled from 'styled-components';
import { A } from '../../styled/';
import  { ReactComponent as logo } from '../../../assets/logo.svg'

const LogoSVG = styled(logo)`
    margin-right: 24px;
    vertical-align: middle;
`;

const StyledLogo = styled(A)`
    & span {
        position: relative;
        vertical-align: middle;
        font-family: ${(props) => props.theme.fontFamily};
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 125%;
        color: ${(props) => props.theme.colorBlackText};

        &::after {
            position: absolute;
            left: 0;
            bottom: -5px;
            display: block;
            width: 100%;
            height: 3px;
            background-color: ${(props) => props.theme.colorBlackText};
            opacity: 0;
            content: "";
            transition: all 0.1s ease-out;
        }
    }

    &:hover span::after {
        opacity: 1;
    }
`;

export { LogoSVG, StyledLogo };