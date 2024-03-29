import styled from "styled-components"
import Header from "../../components/Header"
import { useState } from "react"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

export default function SignupPage() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [disableButton, setDisableButton] = useState(false)
    const body = { name, email, password, confirmPassword }
    function handleForm(e) {
        e.preventDefault()
        setDisableButton(true)
        axios.post(`${process.env.REACT_APP_API_URL}/signup`, body)
            .then((res) => {
                setDisableButton(false)
                alert(res.data)
                setName("")
                setEmail("")
                setPassword("")
                setConfirmPassword("")
            })
            .catch((err) => {
                setDisableButton(false)
                alert(err.response.data)
            })
    }
    return (
        <>
            <Header />
            <Container onSubmit={handleForm}>
                <input placeholder="Nome" type="text" value={name}
                    disabled={disableButton} onChange={(e) => setName(e.target.value)} required />
                <input placeholder="Email" type="email" value={email}
                    disabled={disableButton} onChange={(e) => setEmail(e.target.value)} required />
                <input placeholder="Senha" type="password" value={password}
                    disabled={disableButton} onChange={(e) => setPassword(e.target.value)} required />
                <input placeholder="Confirmar senha" type="password" value={confirmPassword}
                    disabled={disableButton} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type="submit" disabled={disableButton}>
                    {disableButton ? <ThreeDots color="#fff" height={60} width={60} timeout={3000} />
                        : "Criar Conta"}
                </button>
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