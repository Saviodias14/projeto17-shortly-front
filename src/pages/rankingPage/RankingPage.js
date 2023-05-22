import Header from "../../components/Header";
import Trophy from "../../assets/trophy.png"
import { Container, RankingList, RankingLogo } from "./RankingStyles";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RankingPage() {
    const [rankList, setRankList] = useState()
    useEffect(() => {
        const promisse = axios.get(`${process.env.REACT_APP_API_URL}/ranking`)
        promisse.then((res) => {
            setRankList(res.data)
        })
        promisse.catch((err) => alert(err.response.data))
    }, [])
    if (!rankList) {
        return (
            <>
                <Header />
                <Container>
                    <RankingLogo>
                        <img alt="Troféu" src={Trophy} />
                        <h1>Ranking</h1>
                    </RankingLogo>
                    <RankingList>
                    </RankingList>
                    <h2>Crie sua conta para usar nosso serviço!</h2>
                </Container>
            </>
        )
    }
    return (
        <>
            <Header />
            <Container>
                <RankingLogo>
                    <img alt="Troféu" src={Trophy} />
                    <h1>Ranking</h1>
                </RankingLogo>
                <RankingList>
                    {rankList.map((e, i) => <p key={e.id}>
                        <span>{i + 1}. {e.name} -</span> {e.linksCount} links - {e.visitCount} visualizações
                    </p>
                    )}
                </RankingList>
                <h2>Crie sua conta para usar nosso serviço!</h2>
            </Container>
        </>
    )
}