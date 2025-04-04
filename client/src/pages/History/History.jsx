import React, { useEffect, useState } from 'react'
import { toggleHistoryTab } from '../../utils/toggleHistoryTab'
import {useDeleteAllBusinessesMutation, useGetAllBusinessesQuery } from '../../redux/api/business/business';
import "./Product.css"
import "./Products.css"
import "./History.css"
import  '../../components/HistoryCard.css';
import { AiOutlineHeart } from "react-icons/ai";
import { TfiLocationPin } from "react-icons/tfi";

import HistoryCard from '../../components/HistoryCard';
import DeleteHistoryButton from '../../components/DeleteHistoryButton';

const History = () => {
  const { data, refetch} = useGetAllBusinessesQuery();
  const [businesses, setBusinesses] = useState([])

  const [ deleteAllBusinesses ] = useDeleteAllBusinessesMutation()


  useEffect(()=>{
    if(data){
      setBusinesses(data)
    }
  },[data])

  const onClickHandler = ()=>{

    deleteAllBusinesses();
         
  }

  
  
  return (
    <div style={{minHeight:"100vh"}}>
      <h1>History</h1>
      <h2 className="w3-center">Tabs</h2>
<div className="w3-border">
<div className="w3-bar w3-theme">
<DeleteHistoryButton onClick={()=>{onClickHandler()}}
    title={"Clear History"} icon={<AiOutlineHeart className="mx-2" />}
    className="flex h-12 w-1/3 items-center justify-center bg-red-400 duration-100 hover:bg-red-300"
  
  />
  <button className="w3-half w3-button historybtn w3-block w3-padding-16" onClick={(event)=>{toggleHistoryTab(event,'Liked')}}>Liked</button>
  <button className="w3-half w3-button historybtn w3-padding-16" onClick={(event)=>{toggleHistoryTab(event,'Visited')}}>Visited</button>
</div>

<div className="w3-row-padding">
<div id="Liked" className="w3-container history w3-animate-opacity"
      style={{height :"100vh"}} >
  <h2>Liked</h2>
  <p>London is the capital city of England.</p>
  <p>It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
  <div className='container'>
  {
    businesses.map((business, index)=>{
      if(business.liked)

      // </div>
      return <HistoryCard  key={index} business={business} index={index}
                business_id={business.business_id} liked={business.liked}
                visited={business.visited} detail={business.detail}      
            />
    })
  }
  </div>

</div>

<div id="Visited" className="w3-container history w3-animate-opacity" style={{display :"none",height:"100vh"}}>
  <h2>Visited</h2>
  <p>Paris is the capital of France.</p> 
  <p>The Paris area is one of the largest population centers in Europe, with more than 12 million inhabitants.</p>






  <div className="w3-row-padding"> 

{/* <div className="w3-card"> */}
  <div className='container '>
  {
    businesses.map((business, index)=>{
      if(business.visited)

      return <HistoryCard  key={index} business={business} index={index}
      business_id={business.business_id} liked={business.liked}
      visited={business.visited} detail={business.detail}      
  />
    })
  }
    
  </div>

  </div>

















</div>
</div>
</div>

    </div>
  )
}

export default History