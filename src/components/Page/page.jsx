import styled from 'styled-components';

const StylePage = styled.p`
font-family: ${p => p.theme.fontWeights.body};
font-size: ${ p => p.theme.fontSizes.ml};
font-weight:${ p => p.theme.fontWeights.normal};
color: ${ p => p.theme.colors.text};
`;

export const Page = ({children}) => {
    return <StylePage>{children}</StylePage>
}