import styled from "styled-components";

const RootButton= styled.button`
color: ${ ({ theme:{colors}, primary})  => primary ? colors.gray.light : colors.pink.normal};
border:none;
background-color: transparent;
cursor: pointer;
&:hover{
    opacity:.7
}
`;

export const Inline= styled(RootButton)`
&:hover{
    text-decoration:underline;
}

`;
export const Regular= styled(RootButton)`
background-color: ${ ({ theme:{colors}, primary})  => primary ? colors.pink.normal : colors.gray.light };
padding: 5px 10px;
border:  ${ ({ theme})  => `2 px solid ${theme.colors.pink.normal}`};
border: 3px;


`;