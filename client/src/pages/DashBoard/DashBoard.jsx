import React, { useState, useEffect } from 'react'
import { Context as AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import SideBarMenu from './SideBarMenu';
import AppHeader from './AppHeader';
import AppBarMenu from './AppBarMenu';
import Spacer from '../../components/Spacer';
import SearchBar from '../../components/SearchBar/SearchBar';
import useResults from '../../hooks/useResults';
import BusinessCard from '../../components/BusinessCard';
import { useGetAllBusinessesQuery } from '../../redux/api/business/business';
import NavBar from '../../layouts/NavBar';
import { useNavigate } from 'react-router-dom';

const DashBoard = ({
  state
}) => {
    
      const [searchApi, results, errorMessage] = useResults();
      const [inputValue, setInputValue] = useState('');
      const [selectedPrice, setSelectedPrice] = useState(null);
      const [selectedRating, setSelectedRating] = useState(null);
      const [selectedDelivery ,setSelectedDelivery] = useState(false);
      const [selectedPickup ,setSelectedPickup] = useState(false);
      const { data, refetch, error, isError } = useGetAllBusinessesQuery()
      const { signOut } = useContext(AuthContext);
      const navigate = useNavigate();
 
        const [businesses, setBusinesses] = useState([])  
      
        useEffect(()=>{
          if(data){
            setBusinesses(data)
          if(error){
            signOut().then(()=>{
              navigate("/login")
            })
          }
          }
        },[data, error])

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
        
      function filteredData(businesses, selected, query) {
        const {selectedRating, selectedPrice, selectedDelivery, selectedPickup} = selected
        console.log(selectedPrice, selectedRating, selectedDelivery, selectedPickup)
        console.log(businesses.length)
        let filteredBusinesses = businesses;
    
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
    
        return filteredBusinesses

      }    
       let allSelected = {selectedRating, selectedPrice, selectedDelivery, selectedPickup}
    
      // //const result = filteredData(products, selectedCategory, query);
      const filteredBusinesses = filteredData(results, allSelected, inputValue);
 
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
   
  return (
    <>
    <NavBar state={state}/>

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

<div>{JSON.stringify(businesses,null,2)}</div>


  
    {/* Push down content on small screens */}
    <div className="w3-hide-large" style={{ marginTop: 83 }} />
    {/* Top header */}
    <header className="w3-container w3-xlarge">
      <div className="w3-right">
        <SearchBar  value={inputValue}
                 onChange={handleInputChange}
                 onClick={()=>{handleSubmit()}}/>
      </div>
    </header>

    <div className="w3-container" id="jeans">
      {/* <p>{results.length} results</p> */}
      <p>{filteredBusinesses.length} results</p>

    </div>
    {/* BusinessesGrid grid */}
    <div className="w3-row">      
      {
        
        filteredBusinesses.map((record)=>{
          return <BusinessCard name={record.name} image_url={record.image_url} price={record.price}
                   rating={record.rating} location={record.location} record={record}
                   display_phone={record.display_phone} transactions={record.transactions} id={record.id}
                   is_closed={record.is_closed} reviews={record.review_count}

                   key={record.id} businesses={businesses} refetch={refetch}
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

