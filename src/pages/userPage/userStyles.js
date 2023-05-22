import styled from "styled-components"
export const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
export const Search = styled.form`
display:flex;
max-width:90%;
flex-direction: row;
align-items:center;
margin-top:60px;
margin-bottom:50px;
input{
    width:600px;
    max-width:100%;
    margin-right:65px;
    margin-bottom:0;
}
button{
    margin:0;
}
`
export const MyLinks = styled.div`
display:flex;
align-items:center;
margin-bottom:40px;
h1{
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: #000000;
}
`
export const InfoUrl = styled.div`
width: 700px;
height:60px;
background: #80CC74;
box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.25);
border-radius: 12px 0px 0px 12px;
display:flex;
align-items:center;
justify-content: space-between;
padding: 0 21px;
p{
    max-width:33%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF;
}

`
export const DeleteUrl = styled.div`
width:110px;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
background: #FFFFFF;
box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.25);
border-radius: 0px 12px 12px 0px;
`