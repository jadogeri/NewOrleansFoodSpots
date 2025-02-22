import React, { useState, useEffect } from "react";
import {Platform, StyleSheet, Text, View, Button, ScrollView } from "react-native"
import SearchBar from "../../components/SearchBar/SearchBar"
import useResults from "../../hooks/useResults";
import WebResultsList from "../components/WebResultsList/WebResultsList";
import ResultsList from "../../components/ResultList/ResultsList";

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

    return Platform.OS === 'web' ? <ScrollView style={{backgroundColor:'cream'}}>
        <View>
      <SearchBar searchTerm={searchTerm}
            onTermChange={(newTerm) => { setSearchTerm(newTerm) }}
        />
        <Button title="Search" onPress={()=>{searchApi(searchTerm)}}/>  
        </View> 
        <View style={{flexDirection:'column'}}>
        <WebResultsList results={filterResultsByPrice('$')} headerText="Budget Options" />
         <WebResultsList results={filterResultsByPrice('$$')} headerText="Kinda Pricey" />
         <WebResultsList results={filterResultsByPrice('$$$')} headerText="$$$  wowza $$$" />
         <WebResultsList results={filterResultsByPrice('$$$$')} headerText="Extravagant" /> 

 </View>

{/* 
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

     /> */}
    
    </ScrollView>

    :
    <ScrollView>

        <SearchBar searchTerm={searchTerm}
            onTermChange={(newTerm) => { setSearchTerm(newTerm) }}
        />
        <Button title="Search" onPress={()=>{searchApi(searchTerm)}}/>

        {errorMessage ? <Text>{errorMessage} </Text> : null}
        <Text>the number of items in array are {results.length}</Text>
        <ResultsList results={filterResultsByPrice('$')} headerText="Budget Options" />
        <ResultsList results={filterResultsByPrice('$$')} headerText="Kinda Pricey" />
        <ResultsList results={filterResultsByPrice('$$$')} headerText="$$$  wowza $$$" />
        <ResultsList results={filterResultsByPrice('$$$$')} headerText="Extravagant" />

    </ScrollView>
}

export default SearchScreen;