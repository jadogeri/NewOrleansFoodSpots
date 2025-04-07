import { useState, useEffect } from "react"
import yelpApi from "../configs/axios"


export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {        
        try {
            const storage = JSON.parse(sessionStorage.getItem(searchTerm))
            if(storage){
             //alert("inside if key is present")
               setResults(storage)
            }
            else{
               // alert("inside else there is no key ")

            const params = {
                searchTerm : searchTerm
            }

            const response = await yelpApi.get("/yelp/businesses/",{
        
                params : params
            });
            let data = await response.data;
            sessionStorage.setItem(searchTerm,JSON.stringify(data.businesses))
            setResults(data.businesses)
            setErrorMessage('')
        }
     
        } catch (e) {
            console.log('something went wrong terminal')

            setErrorMessage('something went wrong\nerror message : ' + e.message)
        }

    }

    useEffect(() => {
        searchApi('beans')
    }, [])


    return [searchApi, results, errorMessage];

};
