import { useState, useEffect } from "react"
import yelpApi from "../configs/yelpApi"


export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {        
        try {
            console.log("searchTerm === ", searchTerm)
            alert("searchTerm === ", searchTerm)

            const storage = JSON.parse(localStorage.getItem(searchTerm));
            if(storage){
                console.log("inside if , we have data in sorage")
                alert("inside if , we have data in sorage")

                setResults(storage)
            }else{
                alert("inside else , no data in sorage")
                console.log("inside else ,no data in sorage")

           console.log("calling yelpApi instance ====================",yelpApi)
            const response = await yelpApi.get("/fetchdata",{
               
                    searchTerm: searchTerm,
               
            });
            let data = await response.data;
            //console.log("results===================== ", JSON.stringify(data.businesses, null, 2))


            localStorage.setItem(searchTerm,JSON.stringify(data.businesses))
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
        //searchApi('chicken')
    }, [])


    return [searchApi, results, errorMessage];

};
