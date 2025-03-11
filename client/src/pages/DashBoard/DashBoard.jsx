import React, { useState, useEffect } from 'react'
import SideBarMenu from './SideBarMenu';
import AppHeader from './AppHeader';
import AppBarMenu from './AppBarMenu';
import Spacer from '../../components/Spacer';
import SearchBar from '../../components/SearchBar/SearchBar';
import useResults from '../../hooks/useResults';
import BusinessCard from '../../components/BusinessCard';
import noFilter from '../../utils/noFilter';


const DashBoard = () => {

      const [searchApi, results, errorMessage] = useResults();
      const [inputValue, setInputValue] = useState('');
      const [selectedPrice, setSelectedPrice] = useState(null);
      const [selectedRating, setSelectedRating] = useState(null);
      const [selectedDelivery ,setSelectedDelivery] = useState(false);
      const [selectedPickup ,setSelectedPickup] = useState(false);

    
      // ----------- Input Filter -----------
      const [query, setQuery] = useState("");
    
    
      // const filteredItems = products.filter(
      //   (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      // );
    
      
    
      // ----------- Radio Filtering -----------

      const handleRatingChange = (event) => {
        const rating = event.target.value;
        setSelectedRating(rating);
      };
    
      const handlePriceChange = (event) => {
        const price = event.target.value;
        setSelectedPrice(price);
      };

      const handleDeliveryChange = (event) => {
        const delivery = event.target.checked;
        console.log("deliver========",delivery)
        setSelectedDelivery(delivery)
      };

      const handlePickupChange = (event) => {
        const pickup = event.target.checked;
        console.log("pickup========",pickup)

        setSelectedPickup(pickup)
      };



      // ------------ Button Filtering -----------
        

      //////////////////////////////////////////////////
      //////////////////////////////////////////////////
      function filteredData(businesses, selected, query) {
        const {selectedRating, selectedPrice, selectedDelivery, selectedPickup} = selected
        console.log(selectedPrice, selectedRating, selectedDelivery, selectedPickup)
        console.log(businesses.length)
        let filteredBusinesses = businesses;
    
        // Filtering Input Items using results
        // if (query) {
        //   filteredBusinesses = results;
        // }
    
        // Applying selected category filter
        //  if (selectedCategory ) {
        //   filteredProducts = filteredProducts.filter(
        //     ({ category }) =>
        //       category === selectedCategory 
             
        //   );
        // }
    
          // Applying selected rating filter
          if (selectedRating ) {
            filteredBusinesses = filteredBusinesses.filter(business => selectedRating == Math.floor(business.rating) );
          }

          if (selectedPrice ) {
            filteredBusinesses = filteredBusinesses.filter(business => selectedPrice == business.price );
          }

          if (selectedDelivery ) {
            filteredBusinesses = filteredBusinesses.filter(business => business.transactions.includes("delivery") );
          }

          if (selectedPickup ) {
            filteredBusinesses = filteredBusinesses.filter(business => business.transactions.includes("pickup") );
          }
          console.log("selected after rating filter length ===", filteredBusinesses.length)
    
         // Applying selected price filter
        //  if (selectedPrice && !noFilter(selectedPrice)) {
        //   filteredBusinesses = filteredBusinesses.filter(
        //     ({  newPrice }) =>
        //       newPrice === selectedPrice 
        //   );
        // }
    
        return filteredBusinesses
  
        //   ({ img, title, star, reviews, prevPrice, newPrice }) => (
        //     <Card
        //       key={Math.random()}
        //       img={img}
        //       title={title}
        //       star={star}
        //       reviews={reviews}
        //       prevPrice={prevPrice}
        //       newPrice={newPrice}
        //     />
        //   )
        // );
      }
    
    
      //////////////////////////////////////////////////
      //////////////////////////////////////////////////
    
     
       let allSelected = {selectedRating, selectedPrice, selectedDelivery, selectedPickup}
    
      // //const result = filteredData(products, selectedCategory, query);
      const filteredBusinesses = filteredData(results, allSelected, inputValue);
    
      //const testResult = filteredDataTest()
    
    
   
            
      // console.log("results==================================================  ",results.length, JSON.stringify(results,null,2))

      const handleInputChange = (event) => {
        const { value } = event.target;
        console.log("value ====",value)
        //const lettersOnly = value.replace(/[^a-zA-Z]/g, '');
        setInputValue(value);
      };

      const handleSubmit = () => {
        console.log("pressing hanlde submit")
        //alert("pressing hanlde submit")
        console.log("input value to search api =====",inputValue)
        searchApi(inputValue);
      };
    
  
      // const filterResultsByPrice = (price) => {
      //   console.log("price===", price)
      //   if(noFilter(price) || !price){
      //     return results
      //   }
      //     let myfilteredarray = results.filter((result) => {
      //         return result.price === price;
      //     })
  
      //     return myfilteredarray;
  
      // }
      // const filterResultsByRating = (rating) => {
      //   if(noFilter(rating) ||!rating){
      //     return results
      //   }
      //     let myfilteredarray = results.filter((result) => {
      //         return Math.floor(result.rating) == rating;
      //     })
  
      //     return myfilteredarray;
  
      // }

      // let newResults = filterResultsByPrice(selectedPrice)
      // console.log(newResults.length)
      // newResults = filterResultsByRating(selectedRating);
      // console.log(newResults.length)


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
  <SideBarMenu handlePriceChange={handlePriceChange} handleRatingChange={handleRatingChange}
    handleDeliveryChange={handleDeliveryChange} handlePickupChange={handlePickupChange}
    delivery={selectedDelivery} pickup={selectedPickup}
  />
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
      {/* <p>{results.length} results</p> */}
      <p>{filteredBusinesses.length} results</p>

    </div>
    {/* BusinessesGrid grid */}
    <div className="w3-row w3-grayscale">      
      {
        
        filteredBusinesses.map((record)=>{
          return <BusinessCard name={record.name} image_url={record.image_url} price={record.price}
                   rating={record.rating} location={record.location} record={record}
                   display_phone={record.display_phone} transactions={record.transactions} id={record.id}
                   is_closed={record.is_closed} reviews={record.review_count}

                   key={record.id}
            />
        })
      }
         {/* {
        
        results.map((record)=>{
          if(newResults.includes(record)){
          return <BusinessCard name={record.name} image_url={record.image_url} price={record.price}
                   rating={record.rating} location={record.location} record={record}
                   display_phone={record.display_phone} transactions={record.transactions} id={record.id}
                   is_closed={record.is_closed} reviews={record.review_count}

                   key={record.id}
            />
          }
        })
      } */}


    </div>
    

    <Spacer  paddingTop={150}/>
  
    {/* End page content */}
  </div>

</>

 
  );
}


export default DashBoard



/**
 * 
    return (
        <>
          <Sidebar handleChange={handleChange} 
                   handleCategoryChange={handleCategoryChange} 
                   handleColorChange={handleColorChange}
                   handlePriceChange={handlePriceChange} 
          />
          <Navigation query={query} handleInputChange={handleInputChange} />
          <Recommended handleClick={handleClick} handleRecommendedClick={handleRecommendedClick}/>
          <Products result={testresult} />
        </>
      );
    }

 */