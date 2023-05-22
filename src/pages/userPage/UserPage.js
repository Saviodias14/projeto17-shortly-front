import Header from "../../components/Header";
import { Container } from "./userStyles";
import SearchCamp from "./SearchCamp";
import ShortLinks from "./shortLinks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserPage() {
    const [att, setAtt] = useState(false)
    return (
        <>
            <Header />
            <Container>
                <SearchCamp att={att} setAtt={setAtt}/>
                <ShortLinks att={att} setAtt={setAtt}/>
            </Container>
        </>
    )
}
