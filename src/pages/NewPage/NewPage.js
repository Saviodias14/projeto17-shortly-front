import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function NewPage(){
    const params = useParams()
    useEffect(()=>{
        window.location.href=`${process.env.REACT_APP_API_URL}/urls/open/${params.link}`
        //axios.get(`${process.env.REACT_APP_API_URL}/urls/open/${params.link}`)
        //.then(res=>console.log(`oi${res.data}`))
        //.catch(err=>console.log(`oi${err.response.data}`))
    },[])
    return(
        <></>
    )
}