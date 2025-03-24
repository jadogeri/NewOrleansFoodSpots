import { useState, useEffect } from "react"
import yelpApi from "../configs/yelpApi"


export default () => {
    const [business, setBusiness] = useState({});

    const [errorMessage, setErrorMessage] = useState('')

    const searchBusiness = async (id) => {
        try {
            console.log("id from business detail screen ===============", id)
            const business = JSON.parse(sessionStorage.getItem(id))
            if(business){
                console.log("storage =====================",business)
                  setBusiness(business)
            }else{
                console.log("calling yelpApi instance ====================",yelpApi)
                const response = await yelpApi.get(`/fetchdata/${id}`);
                console.log("response in search business ====", response)
                let data = await response.data;  
                sessionStorage.setItem(id,JSON.stringify(data))                
                setBusiness(data)
                setErrorMessage('')
            }
        } catch (e) {
            console.log('something went wrong terminal')
            console.log(e)

            setErrorMessage('something went wrong\nerror message : ' + e.message)
        }

    }

    // useEffect(() => {
    //     searchBusiness()
    // }, [])


    return [searchBusiness, business, errorMessage];

};
