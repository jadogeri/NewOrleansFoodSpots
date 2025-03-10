import React, { useState, useEffect } from 'react'
import SideBarMenu from './SideBarMenu';
import AppHeader from './AppHeader';
import AppBarMenu from './AppBarMenu';
import Spacer from '../../components/Spacer';
import SearchBar from '../../components/SearchBar/SearchBar';
import useResults from '../../hooks/useResults';
import BusinessCard from '../../components/BusinessCard';


const DashBoard = () => {

      const [searchApi, results, errorMessage] = useResults();
      const [inputValue, setInputValue] = useState('');
      
      console.log("results==================================================  ",results.length, JSON.stringify(results,null,2))

      const handleInputChange = (event) => {
        const { value } = event.target;
        //const lettersOnly = value.replace(/[^a-zA-Z]/g, '');
        setInputValue(value);
      };

      const handleSubmit = () => {
        searchApi(inputValue);
      };
    
  
      const filterResultsByPrice = (price) => {
  
          let myfilteredarray = results.filter((result) => {
              return result.price === price;
          })
  
          return myfilteredarray;
  
      }

      

  return (
    <>
    
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Montserrat"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n.w3-sidebar a {font-family: "Roboto", sans-serif}\nbody,h1,h2,h3,h4,h5,h6,.w3-wide {font-family: "Montserrat", sans-serif;}\n'
    }}
  />
  {/* Sidebar/menu */}
  <SideBarMenu />
  {/* Top menu on small screens */}
  <AppHeader />

  {/* Overlay effect when opening sidebar on small screens */}
  <AppBarMenu/>

  {/* !PAGE CONTENT! */}
  <div className="w3-main" style={{ marginLeft: 250 }}>
  <Spacer  paddingTop={100}/>

    {/* Push down content on small screens */}
    <div className="w3-hide-large" style={{ marginTop: 83 }} />
    {/* Top header */}
    <header className="w3-container w3-xlarge">
      <p className="w3-left">Jeans</p>
      <div className="w3-right">
        <SearchBar  value={inputValue}
                 onChange={handleInputChange}
                 onClick={()=>{handleSubmit()}}/>
        <i className="fa fa-shopping-cart w3-margin-right" />
        <i className="fa fa-search" />
      </div>
    </header>

    <div className="w3-container w3-text-grey" id="jeans">
      <p>{results.length} results</p>
    </div>
    {/* BusinessesGrid grid */}
    <div className="w3-row w3-grayscale">      
      {
        
        results.map((record)=>{
          return <BusinessCard name={record.name} image_url={record.image_url} price={record.price}
                   rating={record.rating} location={record.location} record={record}
                   display_phone={record.display_phone} transactions={record.transactions} id={record.id}
                   is_closed={record.is_closed} reviews={record.review_count}

                   key={record.id}
            />
        })
      }


    </div>
    

    <Spacer  paddingTop={150}/>
  
    {/* End page content */}
  </div>

</>

 
  );
}


export default DashBoard