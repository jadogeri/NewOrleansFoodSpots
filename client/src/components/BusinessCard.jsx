import React, { useEffect, useState } from 'react'
import "./BusinessCard.css"
import { useNavigate } from 'react-router-dom'
import getRating from '../utils/getRating';
import { FaLocationDot } from "react-icons/fa6";
import { useUpdateBusinessMutation } from '../redux/api/business/business';
import { useCreateBusinessMutation } from '../redux/api/business/business';
import { useDeleteBusinessMutation } from '../redux/api/business/business';


const BusinessCard = ({
  businesses,
  refetch,
  image_url,
  is_closed,
  name,
  price,
  rating,
  reviews,
  id,
  display_phone,
  location,
  transactions
}) => {
  const navigate = useNavigate();
  const  [ business, setBusiness ] = useState();
  const  [ createBusiness ] = useCreateBusinessMutation();
  const [updateBusiness] = useUpdateBusinessMutation();
  const [deleteBusiness] = useDeleteBusinessMutation();
  const [heartSelected, setHeartSelected] = useState(false);
  const [pinSelected, setPinSelected] = useState(false);

  useEffect(()=>{
    refetch()
    const b = findBusiness(businesses);
    console.log("b====================================================", b)
    if(b?.length ===1){
      setBusiness(b[0])
      setHeartSelected(b[0].liked);
      setPinSelected(b[0].visited)

    }


  },[businesses])

  const findBusiness = (businesses)=>{
    const business = businesses?.filter((business)=>{
      return id === business.business_id
  
    })
    return business;
  
  }

  const handleIconClick = ({icon})=>{
    console.log("clicking icon..................................")
    // const businessFound = businesses?.filter((business)=>{
    //   return id === business.business_id
    // })
    const businessFound = findBusiness(businesses);
    console.log("businessfound =============", businessFound)
    //if no business found, create business
    if(businessFound.length === 0){
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
      if(((icon==="heart" && businessFound[0].liked === true && businessFound[0].visited === false ) || 
         (icon==="pin"  && businessFound[0].liked === false && businessFound[0].visited === true)) ){
          deleteBusiness(businessFound[0]?.business_id)
          .then(()=>{
            setHeartSelected(false);
            setPinSelected(false);
          });
          
      }else{
        updateBusiness({
          business_id :id,
          liked :icon==="heart"? !businessFound[0].liked :businessFound[0].liked,
          visited :icon==="pin"? !businessFound[0].visited :businessFound[0].visited

        })
      }
    }
 
  }

  
  return (

   <div className="w3-col l3 s6">
    <div className="w3-container">   
      <i className='fa fa-heart' onClick={()=>{handleIconClick({icon : "heart"})}}
          
        style={{
          position: "absolute",
         // color: !business? "gray" : business.liked === true? "red": "gray" ,
         color: !business? "gray" : heartSelected === true? "red": "gray" ,
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
          <FaLocationDot style={{color: !business? "gray" : pinSelected === true? "green": "gray" }} />         

         </div>    
        
      <img src={image_url} style={{ width: "100%",height:200,cursor:"pointer" }}  alt='image'
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

