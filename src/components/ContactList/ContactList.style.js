import styled from 'styled-components';


export const StyleLabel  = styled.label`
display: flex;

margin-bottom: ${p => p.theme.space[3]}px;
font-family: ${p => p.theme.fontWeights.body};
font-size: ${ p => p.theme.fontSizes.m};
font-weight: ${ p => p.theme.fontWeights.normal};
color: ${ p => p.theme.colors.text};
`;

export const StyleItem = styled.li`
display: flex;
align-items: center;

`;

export const StyleButton  = styled.button`
display: block;
padding:${p => p.theme.space[3]}px;
font-family: ${p => p.theme.fontWeights.body};
font-size: ${ p => p.theme.fontSizes.xs};
font-weight:${ p => p.theme.fontWeights.normal};
color: ${ p => p.theme.colors.text};
background-color: ${ p => p.theme.colors.white};
border-radius: ${ p => p.theme.radii.sm};
border: ${ p => p.theme.borders.normal};
margin-left: ${p => p.theme.space[3]}px;
margin-bottom: ${p => p.theme.space[3]}px;

`;

export const StylePage = styled.p`
margin-right: ${p => p.theme.space[3]}px;

font-family: ${p => p.theme.fontWeights.body};
font-size: ${ p => p.theme.fontSizes.ml};
font-weight:${ p => p.theme.fontWeights.normal};
color: ${ p => p.theme.colors.text};
`;