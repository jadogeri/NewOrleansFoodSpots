import { useState, useEffect } from "react"
import yelpApi from "../configs/yelpApi"


export default () => {
    const [business, setBusiness] = useState({});

    const [errorMessage, setErrorMessage] = useState('')

    const searchBusiness = async (id) => {
        try {
           console.log("calling yelpApi instance ====================",yelpApi)
            const response = await yelpApi.get(`/fetchdata/${id}`);
            console.log("response in search business ====", response)
            let data = await response.data;
            //console.log("results===================== ", JSON.stringify(data.businesses, null, 2))


            
            setBusiness(data)
            setErrorMessage('')
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
