import { useState, useEffect } from "react"
import yelpApi from "../configs/yelpApi"


export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
           console.log("yelpApi instance ====================",yelpApi)
            const response = await yelpApi.get(`/search?location=New+Orleans,+LA&term=`+`${searchTerm}`);
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

/*
import { useState, useEffect } from "react"
import yelpApi from "../configs/yelp"

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
           console.log("base url ================",process.env.REACT_APP_YELP_BASE_URL)
            const response = await  yelpApi.get(process.env.REACT_APP_YELP_BASE_URL + `${searchTerm}`+`&`);
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

*/

// export default () => {
//     const [results, setResults] = useState([]);
//     const [errorMessage, setErrorMessage] = useState('')

//     const searchApi = async (searchTerm) => {
//         try {
//            console.log("base url ================",process.env.REACT_APP_YELP_BASE_URL)
//             const response = await  fetch(process.env.REACT_APP_YELP_BASE_URL + `${searchTerm}`+`&`);
//             let data = await response.json();

//             setResults(data.businesses)
//             setErrorMessage('')
//         } catch (e) {
//             console.log('something went wrong terminal')

//             setErrorMessage('something went wrong\nerror message : ' + e.message)
//         }

//     }

//     useEffect(() => {
//         searchApi('chicken')
//     }, [])


//     return [searchApi, results, errorMessage];

// };

// axios.get(https://api.yelp.com/v3/businesses/search, {
//     headers: {
//       Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
//  },
//     params: {
//       location: {locationSearched},
//       categories: 'breakfast_brunch',
//  }
//  .then((res) => {
//   console.log(res)
//  })
//  .catch((err) => {
//   console.log ('error')
//  })