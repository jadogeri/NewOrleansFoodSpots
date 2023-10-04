import React, { useState, useEffect } from "react";
import {Platform, StyleSheet, Text, View, Button, ScrollView } from "react-native"
import FlatList from "flatlist-react";
import SearchBar from "../../components/SearchBar/SearchBar"
import useResults from "../../hooks/useResults";
import ResultsList from "../../components/ResultList/ResultsList";
import WebResultsList from "../../components/WebResultList/WebResultsList";


const renderPerson = (result, idx) => {
    return (

        <li key={result.id}>
            <h1>hi in searchscreen line 14</h1>
            <Text style={{flexDirection:'row'}}>{}</Text>
            {/* <img key={result.id}src={result.photo}/> <Text>next to photo</Text> */}
            <img style={{height:100,width:100}} key={result.id}src={result.image_url}/> <Text>next to photo</Text>
            <h1>{result.id}</h1>
            <h1>{result.photo}</h1>
            
        </li>
    );
  }


// const renderPerson = (person) => {
//     return (
//         <li >
//             <h1>hi</h1>
//             <Text style={{flexDirection:'row'}}>{person.firstName}</Text>
//         </li>
//     );
//   }

const SearchScreen = (props) => {

   const  people = [
        {firstName: 'Elson', lastName: 'Correia', info: {age: 24}},
        {firstName: 'John', lastName: 'Doe', info: {age: 18}},
        {firstName: 'Jane', lastName: 'Doe', info: {age: 34}},
        {firstName: 'Maria', lastName: 'Carvalho', info: {age: 22}},
        {firstName: 'Kelly', lastName: 'Correia', info:{age: 23}},
        {firstName: 'Don', lastName: 'Quichote', info: {age: 39}},
        {firstName: 'Marcus', lastName: 'Correia', info: {age: 0}},
        {firstName: 'Bruno', lastName: 'Gonzales', info: {age: 25}},
        {firstName: 'Alonzo', lastName: 'Correia', info: {age: 44}}
      ]
    

    const [searchTerm, setSearchTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {

        let myfilteredarray = results.filter((result) => {
            return result.price === price;
        })

        return myfilteredarray;

    }

    console.log(results);
    for(let i = 0;i< results.length; i++){
        //alert(results[i].photo)
        console.log('line 66' + results[i])

    }

    ;

    return Platform.OS === 'web' ? <
    div> search
    <ScrollView style={{overflow:'auto' }}>
     {/* <WebResultsList results={filterResultsByPrice('$')} headerText="Budget Options" />
        <br/>        
        <WebResultsList results={filterResultsByPrice('$$')} headerText="Kinda Pricey" />
        <br/>
        <WebResultsList results={filterResultsByPrice('$$$')} headerText="$$$  wowza $$$" />
        <br/>
        <WebResultsList results={filterResultsByPrice('$$$$')} headerText="Extravagant" /> */}
    <FlatList 
    list={results}    
    displayGrid
    // renderOnScroll
    wrapperHtmlTag="div"
    style={{overflow:'scroll',heigt:"100000px",flex:1}}
    renderItem={renderPerson}
    renderWhenEmpty={() => <div>List is empty!</div>}
    // sortBy={["firstName", {key: "lastName", descending: true}]}
    // groupBy={person => person.info.age > 18 ? 'Over 18' : 'Under 18'}
    />
    </ScrollView>
    </div> 
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