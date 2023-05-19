import styled from "styled-components"
import logo from "../assets/logo.png"
import { Link, useParams } from "react-router-dom"
export default function Header(){
    const param = useParams()
    console.log(param)
    return(
        <Container>
            <Menu>
                <Link to="/signin">Entrar</Link>
                <Link to="/signup">Cadastrar-se</Link>
            </Menu>
            <Logo>
                <img alt="Logo da pagina" src={logo}/>
            </Logo>
        </Container>
    )
}

const Container = styled.header`
height: 200px;
display: flex;
flex-direction:column;
justify-content:space-between;
align-items:flex-end`

const Logo = styled.div`
width:100%;
display:flex;
justify-content:center;
`
const Menu = styled.div`
width:max-content;
display: flex;
justify-content: flex-end;
margin-top: 40px;
margin-right:148px;
a{
    text-decoration:none;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #9C9C9C;
    margin-right:22px;
}
a:hover{
    color:#5D9040;
}
`
