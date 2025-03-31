import { useState, useEffect } from "react"
import yelpApi from "../configs/yelpApi"


export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {        
        try {
            const storage = JSON.parse(sessionStorage.getItem(searchTerm))
            if(storage){
             console.log("storage =====================",storage)
             //alert("inside if key is present")
               setResults(storage)
            }
            else{
               // alert("inside else there is no key ")

            console.log("searchTerm === ", searchTerm)
            const params = {
                searchTerm : searchTerm
            }

           console.log("calling yelpApi instance ====================",yelpApi)
            const response = await yelpApi.get("/yelp/businesses/",{
        
                params : params
            });
            let data = await response.data;
            console.log("results===================== ", JSON.stringify(data, null, 2))



            sessionStorage.setItem(searchTerm,JSON.stringify(data.businesses))
            setResults(data.businesses)
            setErrorMessage('')
        }
     
        } catch (e) {
            console.log('something went wrong terminal')
            console.log(e)


            setErrorMessage('something went wrong\nerror message : ' + e.message)
        }

    }

    useEffect(() => {
        searchApi('beans')
    }, [])


    return [searchApi, results, errorMessage];

};
