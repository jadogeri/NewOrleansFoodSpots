import { useState, useEffect } from "react"
import yelpApi from "../configs/axios"


export default () => {
    const [business, setBusiness] = useState({});

    const [errorMessage, setErrorMessage] = useState('')

    const searchBusiness = async (id) => {
        try {
            const business = JSON.parse(sessionStorage.getItem(id))
            if(business){
                  setBusiness(business)
            }else{
                const response = await yelpApi.get(`/yelp/businesses/${id}`);
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



    return [searchBusiness, business, errorMessage];

};
