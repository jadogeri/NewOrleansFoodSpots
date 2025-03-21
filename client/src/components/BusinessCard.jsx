import React, { useState } from 'react'
import "./BusinessCard.css"
import { useNavigate } from 'react-router-dom'
import getRating from '../utils/getRating';
import { FaLocationDot } from "react-icons/fa6";

const BusinessCard = ({
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


  return (

   <div className="w3-col l3 s6">
    <div className="w3-container">    
      <i className='fa fa-heart' onClick={()=>{setLike(prev => !prev)}}
        style={{
          position: "absolute",
          color: !like? "gray" : "red"  ,
          fontSize:"200%"  ,
          cursor:"pointer",
          marginTop:2

   
         }}></i>    
          <div  onClick={()=>{setVisited(prev => !prev)}}
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

