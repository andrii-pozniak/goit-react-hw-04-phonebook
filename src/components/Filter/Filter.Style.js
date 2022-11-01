import styled from 'styled-components';


export const StyleLabel  = styled.label`
display: flex;
margin-bottom: ${p => p.theme.space[3]}px;
font-family: ${p => p.theme.fontWeights.body};
font-size: ${ p => p.theme.fontSizes.m};
font-weight: ${ p => p.theme.fontWeights.normal};
color: ${ p => p.theme.colors.text};
`;

export const StyleInput  = styled.input`
display: flex;
padding: ${p => p.theme.space[2]}px;
margin-bottom: ${p => p.theme.space[3]}px
`;
