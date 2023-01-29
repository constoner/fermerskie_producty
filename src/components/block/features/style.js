import styled from 'styled-components';
import { Ul } from '../../styled';

const StyledFeatures = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px ${(props) => props.theme.pagePadding};    
`;

const StyledWrapper = styled.div`
    display: flex;
    margin: 64px 0;
`;

const StyledFeaturesList = styled(Ul)`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.indent};
    width: 50%;
    flex-grow: 1;    
    &:not(:last-child) {
        margin-right: ${(props) => props.theme.indent};
    }

    & li {
        min-height: 197px
    }
`;


export { StyledFeatures, StyledWrapper,  StyledFeaturesList };
