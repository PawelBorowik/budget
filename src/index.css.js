import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  ul {
    list-style:none;
    li + li margin-left{
      margin-left: ${({theme})=> theme.spacing.xs}px;
    }
  }
`