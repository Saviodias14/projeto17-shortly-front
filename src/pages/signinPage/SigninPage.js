import Header from "../../components/Header"
import { ThreeDots } from "react-loader-spinner"
import styled from "styled-components"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function SigninPage() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [disableButton, setDisableButton] = useState(false)
    const navigate = useNavigate()
    const body = { email, password }

    function handleForm(e) {
        e.preventDefault()
        setDisableButton(true)
        axios.post(`${process.env.REACT_APP_API_URL}/signin`, body)
            .then((res) => {
                setDisableButton(false)
                localStorage.setItem("token", res.data.token)
                console.log(res.data.token)
                setEmail("")
                setPassword("")
                navigate("/me")
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
                <input placeholder="Email" type="email" value={email}
                    disabled={disableButton} onChange={(e) => setEmail(e.target.value)} required />
                <input placeholder="Senha" type="password" value={password}
                    disabled={disableButton} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" disabled={disableButton}>
                    {disableButton ? <ThreeDots color="#fff" height={60} width={60} timeout={3000} />
                        : "Entrar"}
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