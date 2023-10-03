import {api_search_url} from "../api/yelp"
import { useState, useEffect } from "react"

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
           
            const response = await  fetch(api_search_url + `${searchTerm}`);
            let data = await response.json();

            setResults(data.businesses)
            setErrorMessage('')
        } catch (e) {
            console.log('something went wrong terminal')

            setErrorMessage('something went wrong\nerror message : ' + e.message)
        }

    }

    useEffect(() => {
        searchApi('chicken')
    }, [])


    return [searchApi, results, errorMessage];

};

