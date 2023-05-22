import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function NewPage(){
    const params = useParams()
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/urls/open/${params.link}`)
    },[])
    return(
        <></>
    )
}