import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function NewPage(){
    const params = useParams()
    useEffect(()=>{
        window.location.href=`${process.env.REACT_APP_API_URL}/urls/open/${params.link}`
    },[])
    return(
        <></>
    )
}