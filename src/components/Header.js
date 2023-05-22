import styled from "styled-components"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { useContext } from "react"
import UserName from "../context/UserContext"
export default function Header() {
    const { name } = useContext(UserName)
    if (name) {
        return (
            <Container>
                <WellCome>Seja bem-vindo(a), {name}!</WellCome>
                <Menu>
                    <Link to="/me">home</Link>
                    <Link to="/">ranking</Link>
                    <Link to="/" onClick={()=>{
                        console.log("oi")
                        localStorage.removeItem('token')
                        }}>sair</Link>
                </Menu>
                <Logo>
                    <img alt="Logo da pagina" src={logo} />
                </Logo>
            </Container>
        )
    }
    return (
        <Container>
            <Menu>
                <Link to="/signin">Entrar</Link>
                <Link to="/signup">Cadastrar-se</Link>
            </Menu>
            <Logo>
                <img alt="Logo da pagina" src={logo} />
            </Logo>
        </Container>
    )
}

const Container = styled.header`
height: 200px;
display: flex;
flex-direction:column;
justify-content:space-between;
align-items:flex-end;
position: relative;
`

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
const WellCome = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #5D9040;
position:absolute;
left: 270px;
top: 50px;
`
