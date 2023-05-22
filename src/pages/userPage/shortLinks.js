import { FaTrashAlt } from "react-icons/fa";
import { MyLinks, InfoUrl, DeleteUrl } from "./userStyles";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserName from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
export default function ShortLinks({att, setAtt}) {
    const [myLinks, setMyLinks] = useState()
    const {setName} = useContext(UserName)
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/users/me`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then((res) => {
                setMyLinks(res.data)
                setName(res.data.name)
            })
            .catch((err) => {
                navigate("/")
                setName("")
                alert(err.response.data)
            })
    }, [att])

    function deleteLink(id){
        axios.delete(`${process.env.REACT_APP_API_URL}/urls/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        .then(()=>{
            alert("Link deletado com sucesso!")
            setAtt(!att)
        })
        .catch((err)=>alert(err.response.data))
    }
    if (!myLinks||!myLinks.shortenedUrls[0].id) {
        return (
            <MyLinks>
                <h1>Você ainda não tem nenhum link :(</h1>
            </MyLinks>
        )
    }
    return (
        <div>

            {myLinks.shortenedUrls.map((e) => <MyLinks>
                <InfoUrl onClick={()=>navigate(`/me/open/${e.shortUrl}`)}>
                    <p>{e.url}</p>
                    <p>{e.shortUrl}</p>
                    <p>Quantidade de visitantes: {e.visitCount}</p>
                </InfoUrl>
                <DeleteUrl>
                    <FaTrashAlt onClick={()=>deleteLink(e.id)} color="#EA4F4F" style={{ cursor: "pointer" }} />
                </DeleteUrl>
            </MyLinks>)}

        </div>
    )
}