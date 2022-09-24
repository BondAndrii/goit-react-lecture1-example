import styled from 'styled-components';

export const Card = styled.article`
padding: 20px;
box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;
export const InfoConteiner = styled.div`
display: flex;
align-items: center;
gap: 20px;
border: 5px solid rebeccapurple;
border-radius: 5px;
padding: 10px;
`;
export const RecipeName = styled.h2`
color: green;
`;
export const InfoBlock = styled.div`
display: flex;
align-items: center;
gap: 8px;
>svg{
    color: purple;
}
`;
export const Label = styled.p`
color: blue;

`;