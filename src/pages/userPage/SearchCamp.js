import { ThreeDots } from "react-loader-spinner";
import { Search } from "./userStyles";
import {  useState } from "react";
import axios from "axios";
export default function SearchCamp({att, setAtt}) {
    const [url, setUrl] = useState()
    const [disableButton, setDisableButton] = useState(false)
    function handleForm(e){
        e.preventDefault()
        setDisableButton(true)
        axios.post(`${process.env.REACT_APP_API_URL}/urls/shorten`, {url}, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        .then((res)=>{
            console.log(res.data)
            setDisableButton(false)
            setUrl("")
            setAtt(!att)
        })
        .catch(err=>{
            alert(err.response.data)
            setDisableButton(false)
        })
    }
    return (
        <Search onSubmit={handleForm}>
            <input placeholder="Links que cabem no bolso" type="url" value={url}
                disabled={disableButton} onChange={(e) => setUrl(e.target.value)} required />
            <button type="submit">{disableButton ? <ThreeDots color="#fff" height={60} width={60} timeout={3000} />
                : "Encurtar Link"}
            </button>
        </Search>
    )
}