import styled from "styled-components"
import Header from "../../components/Header"
import { useState } from "react"

export default function SignupPage() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [disableButton, setDisableButton] = useState(false)
    return (
        <>
            <Header />
            <Container>
                <input placeholder="Nome" type="text" value={name}
                    disabled={disableButton} onChange={(e) => setName(e.target.value)} required />
                <input placeholder="Email" type="email" value={email}
                    disabled={disableButton} onChange={(e) => setEmail(e.target.value)} required />
                <input placeholder="Senha" type="password" value={password}
                    disabled={disableButton} onChange={(e) => setPassword(e.target.value)} required />
                <input placeholder="Confirmar senha" type="password" value={confirmPassword}
                    disabled={disableButton} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type="submit">Criar Conta</button>
            </Container>
        </>
    )
}

const Container = styled.form`
max-width:800px;
display:flex;
flex-direction:column;
margin: 80px auto 0 auto;
`