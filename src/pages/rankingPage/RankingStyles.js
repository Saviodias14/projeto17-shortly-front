import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction:column;
align-items: center;
h2{
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: #000000;
}
`
export const RankingLogo = styled.div`
margin-top:60px;
display:flex;
flex-direction:row;
align-items: center;
margin-bottom:30px;
h1{
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: #000000;
    margin-left:10px;
}
`
export const RankingList = styled.div`
box-sizing:border-box;
width:600px;
padding: 19px 40px 30px 40px;
border: 1px solid rgba(120, 177, 89, 0.25);
box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
border-radius: 24px 24px 0px 0px;
margin-bottom:40px;
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    color: #000000;
}
span{
    font-weight:500;
}
`