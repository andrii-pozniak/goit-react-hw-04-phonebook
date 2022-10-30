import styled from 'styled-components';

export const StyleForm  = styled.form`
padding:${p => p.theme.space[4]}px;
border:${p => p.theme.borders.normal};
`;

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

export const StyleButton  = styled.button`
padding:${p => p.theme.space[2]}px;
font-family: ${p => p.theme.fontWeights.body};
font-size: ${ p => p.theme.fontSizes.xs};
font-weight:${ p => p.theme.fontWeights.normal};
color: ${ p => p.theme.colors.text};
back-ground color: ${ p => p.theme.colors.white};
border-radius: ${ p => p.theme.radii.sm};
border: ${ p => p.theme.borders.normal};;

`;