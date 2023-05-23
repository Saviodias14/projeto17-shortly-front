import Header from "../../components/Header";
import { Container } from "./userStyles";
import SearchCamp from "./SearchCamp";
import ShortLinks from "./shortLinks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserPage() {
    const [att, setAtt] = useState(false)
    const navigate = useNavigate()
    console.log(localStorage.getItem('token'))
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate("/")
        }
    }, [])
    return (
        <>
            <Header />
            <Container>
                <SearchCamp att={att} setAtt={setAtt} />
                <ShortLinks att={att} setAtt={setAtt} />
            </Container>
        </>
    )
}
