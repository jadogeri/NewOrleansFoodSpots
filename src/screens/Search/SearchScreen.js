import React, { useState, useEffect } from "react";
import {Platform, StyleSheet, Text, View, Button, ScrollView } from "react-native"
import FlatList from "flatlist-react";
import SearchBar from "../../components/SearchBar/SearchBar"
import useResults from "../../hooks/useResults";
import ResultsList from "../../components/ResultList/ResultsList";
import WebResultsList from "../../components/WebResultList/WebResultsList";

const renderCompany = (result, idx) => {
    console.log(result)
    return (

        
        <li key={result.id}>
          
          <h5>{result.name}</h5>
          
            <Text style={{flexDirection:'row'}}>{}</Text>
            <img style={{height:100,width:100}} key={result.id}src={result.image_url}/> 
            <h5>longitude : {result.coordinates.longitude}</h5>
            <h5>latitude : {result.coordinates.latitude}</h5>
            <h5>display_phone : {result.display_phone}</h5>
            <h5>phone : {result.phone}</h5>

            <h5>id : {result.id}</h5>
            <h5> is closed : {result.is_closed === true?'yes':'no'}</h5>
            <h5>location : {JSON.stringify(result.location)}</h5>
            <h5>price : {result.price}</h5>
            <h5>rating : {result.rating}</h5>
            <h5>review count : {result.review_count}</h5>
                       
        </li>
    );
  }



  
const SearchScreen = (props) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {

        let myfilteredarray = results.filter((result) => {
            return result.price === price;
        })

        return myfilteredarray;

    }

    console.log(results);    

    return Platform.OS === 'web' ? <ScrollView>
        <View>
      <SearchBar searchTerm={searchTerm}
            onTermChange={(newTerm) => { setSearchTerm(newTerm) }}
        />
         <br></br>  
        <Button title="Search" onPress={()=>{searchApi(searchTerm)}}/>  
        <br></br>   
        </View> 
        <View>
 {/* <WebResultsList results={filterResultsByPrice('$')} headerText="Budget Options" />
         <br/>        
         <WebResultsList results={filterResultsByPrice('$$')} headerText="Kinda Pricey" />
         <br/>
         <WebResultsList results={filterResultsByPrice('$$$')} headerText="$$$  wowza $$$" />
         <br/>
         <WebResultsList results={filterResultsByPrice('$$$$')} headerText="Extravagant" /> 
 */}


    <FlatList 
    list={results}    
     displayGrid
    hasMoreItems
     paginationLoadingIndicator={<div style={{background: '#090'}}>Getting more items...</div>}
     paginationLoadingIndicatorPosition="center"
     renderOnScroll
    // wrapperHtmlTag="div"  
     renderItem={renderCompany}
     renderWhenEmpty={() => <div>List is empty!</div>}

     />
    </View>
    </ScrollView>
    // <div> search
    // <ul   style={{overflow:'scroll',flex:1}} >
    //     <Text>inside of scrollview</Text>
    //  {/* <WebResultsList results={filterResultsByPrice('$')} headerText="Budget Options" />
    //     <br/>        
    //     <WebResultsList results={filterResultsByPrice('$$')} headerText="Kinda Pricey" />
    //     <br/>
    //     <WebResultsList results={filterResultsByPrice('$$$')} headerText="$$$  wowza $$$" />
    //     <br/>
    //     <WebResultsList results={filterResultsByPrice('$$$$')} headerText="Extravagant" /> */}
    // <FlatList 
    // list={results}    
    // displayGrid
    // hasMoreItems
    // paginationLoadingIndicator={<div style={{background: '#090'}}>Getting more items...</div>}
    // paginationLoadingIndicatorPosition="center"
    // renderOnScroll
    // wrapperHtmlTag="div"
  
    // renderItem={renderPerson}
    // renderWhenEmpty={() => <div>List is empty!</div>}
    // // sortBy={["firstName", {key: "lastName", descending: true}]}
    // // groupBy={person => person.info.age > 18 ? 'Over 18' : 'Under 18'}
    // />
    // </ul>
    // </div> 
    ///////////////////////////////////////////////////////////////////////////
    :
    <ScrollView>

        <SearchBar searchTerm={searchTerm}
            onTermChange={(newTerm) => { setSearchTerm(newTerm) }}
        />
        <Button title="Search" onPress={()=>{searchApi(searchTerm)}}/>

        {errorMessage ? <Text>{errorMessage} </Text> : null}
        <Text>the number of items in array are {results.length}</Text>
        {/* <ResultsList results={filterResultsByPrice('$')} headerText="Budget Options" />
        <ResultsList results={filterResultsByPrice('$$')} headerText="Kinda Pricey" />
        <ResultsList results={filterResultsByPrice('$$$')} headerText="$$$  wowza $$$" />
        <ResultsList results={filterResultsByPrice('$$$$')} headerText="Extravagant" /> */}

    </ScrollView>
}

export default SearchScreen;