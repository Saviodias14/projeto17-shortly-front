import Header from "../../components/Header";
import Trophy from "../../assets/trophy.png"
import { Container, RankingList, RankingLogo } from "./RankingStyles";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RankingPage(){
    const [rankList, setRankList] = useState()
    useEffect(()=>{
        const promisse = axios.get(`${process.env.REACT_APP_API_URL}/ranking`)
        promisse.then((res)=>{
            setRankList(res.data)
            console.log(res.data)
        })
        promisse.catch((err)=>alert(err.response.data))
    },[])
    return(
        <>
        <Header/>
        <Container>
            <RankingLogo>
                <img alt="Troféu" src={Trophy}/>
                <h1>Ranking</h1>
            </RankingLogo>
            <RankingList>
                <p><span>1. Fulaninha -</span> 32 links - 1.703.584 visualizações</p>
                <p><span>2. Ciclano -</span> 20 links - 1.113.347 visualizações</p>
                <p><span>3. Beltrana -</span> 18 links - 852.961 visualizações</p>
                <p><span>4. Joaozin -</span> 14 links - 492.173 visualizações</p>
            </RankingList>
            <h2>Crie sua conta para usar nosso serviço!</h2>
        </Container>
        </>
    )
}
