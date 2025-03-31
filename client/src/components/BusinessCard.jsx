import React, { useEffect, useState } from 'react'
import "./BusinessCard.css"
import { useNavigate } from 'react-router-dom'
import getRating from '../utils/getRating';
import { FaLocationDot } from "react-icons/fa6";
import { useUpdateBusinessMutation } from '../redux/api/business/business';
import { useCreateBusinessMutation } from '../redux/api/business/business';

const BusinessCard = ({
  businesses,
  refetch,
    image_url,
    name,
    price,
    rating,
    reviews,
    is_closed,
    id,
    display_phone,
    location,
    transactions
}) => {
  const navigate = useNavigate();
  const [like, setLike] = useState(false)
  const [visited, setVisited] = useState(false)
  const  [ createBusiness ] = useCreateBusinessMutation();
  const [updateBusiness] = useUpdateBusinessMutation();

  useEffect(()=>{
    refetch()

  },[])

  const handleIconClick = ({icon})=>{
    console.log("clicking icon..................................")
    const businessFound = businesses?.filter((business)=>{
      return id === business.business_id
    })
    console.log("businessfound =============", businessFound)
    //if no business found, create business
    if(businessFound.length === 0){
      alert("did not find biz")
      createBusiness({
        business_id: id,
        liked: icon==="heart"? true : false,
        visited: icon==="pin"? true : false,
        detail: {
           name: name,
           phone: display_phone,
           rating:rating,           
        }
      })
        console.log("refetching..................................")

    }else{
      alert("business already exists in database")
      updateBusiness({
        business_id :id,
        liked :icon==="heart"? !businessFound[0].liked :businessFound[0].liked,
        visited :icon==="pin"? !businessFound[0].visited :businessFound[0].visited

      })
    }
    switch(icon){
      case "heart":
        console.log("i clicked heart button")
        setLike(prev => !prev)
        break;
      case "pin":
        console.log("i clicked pin button")
        setVisited(prev => !prev)
        break;
      default:
        break;
    }
  
  }

  
  return (

   <div className="w3-col l3 s6">
    <div className="w3-container">    
      <i className='fa fa-heart' onClick={()=>{handleIconClick({icon : "heart"})}}
        style={{
          position: "absolute",
          color: !like? "gray" : "red"  ,
          fontSize:"200%"  ,
          cursor:"pointer",
          marginTop:2

   
         }}></i>    
          <div  onClick={()=>{handleIconClick({icon : "pin"})}}
        style={{
          position: "absolute",
          fontSize:"200%"  ,
          cursor:"pointer",
          marginLeft:30,
          marginTop:2

   
         }}>  
          <FaLocationDot style={{color: !visited?"grey" : "green"}} />         
         </div>    
        
      <img src={image_url} style={{ width: "100%",height:200,cursor:"pointer" }} 
      onClick={()=>{     
        navigate("/dashboard/business", {
          state:{
            id : id
          }
        })
      }}
      />
      <div className="example" >
      <p>
        <b>{name}</b>
        <br />
        <b>{location.address1}</b>
        <br />
        <b>{location.city} {location.state}, {location.zip_code}</b>
        <br />
        <b>price: {price}</b>
        <br />
        <b>rating: {getRating(rating)}</b>
        <br />
        <b>phone: {display_phone}</b>
        <br/>
        <b>delivery {transactions.includes("delivery")?"✔️":"❌"} , pickup {transactions.includes("pickup")?"✔️":"❌"}</b>
        <br />
        <b>open : {!is_closed?"yes":"no"}</b>
        <br />
        <b>reviews : {reviews}</b>     


      </p>
      </div>
    </div>
    
  </div>
 
  )
}

export default BusinessCard

