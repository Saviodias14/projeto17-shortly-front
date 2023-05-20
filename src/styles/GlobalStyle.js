import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
    font-family: 'Lexend Deca', sans-serif;
}
input{
    margin-bottom:25px;
    height:60px;
    background: #FFFFFF;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;
    box-sizing:border-box;
    padding-left:22px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #000;
}
input::placeholder{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #9C9C9C;
}
button{
    height:60px;
    width: max-content;
    margin: 35px auto 50px auto;
    padding: 0 44px;
    background: #5D9040;
    border-radius: 12px;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF;
    transition: transform 0.1s ease-in-out;
&:active {
  transform: translateY(2px);
}
}
`

export default GlobalStyle