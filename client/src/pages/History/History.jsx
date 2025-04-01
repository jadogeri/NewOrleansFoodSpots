import React from 'react'
import { toggleHistoryTab } from '../../utils/toggleHistoryTab'
import { useGetAllBusinessesQuery } from '../../redux/api/business/business';
import "./History.css"

const History = () => {
  const { data: businesses, refetch, isLoading, error, isFetching } = useGetAllBusinessesQuery();
  
  return (
    <div style={{minHeight:"100vh"}}>
      <h1>History</h1>
      <h2 className="w3-center">Tabs</h2>
<div className="w3-border">
<div className="w3-bar w3-theme">
  <button className="w3-half w3-button historybtn w3-block w3-padding-16" onClick={(event)=>{toggleHistoryTab(event,'Liked')}}>Liked</button>
  <button className="w3-half w3-button historybtn w3-padding-16" onClick={(event)=>{toggleHistoryTab(event,'Visited')}}>Visited</button>
</div>

<div className="w3-row-padding">
<div id="Liked" className="w3-container history w3-animate-opacity w3-half"
      style={{height :"100vh"}} >
  <h2>Liked</h2>
  <p>London is the capital city of England.</p>
  <p>It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
  <div className='container'>
  {
    businesses.map((business, index)=>{
      if(business.liked)
       return <div className='item'
       key={index} style={{width:400,height:300, backgroundColor : "goldenrod"}}>
                <h1>{index}</h1>


      </div>
    })
  }
    
  </div>
</div>

<div id="Visited" className="w3-container history w3-animate-opacity w3-half" style={{display :"none",height:"100vh"}}>
  <h2>Visited</h2>
  <p>Paris is the capital of France.</p> 
  <p>The Paris area is one of the largest population centers in Europe, with more than 12 million inhabitants.</p>

  <div className='container'>
  {
    businesses.map((business, index)=>{
      if(business.visited)
       return <div key={index} className='item'
       style={{width:400,height:300, display: "flex", backgroundColor : "green"}}>
        <h1>{index}</h1>

      </div>
    })
  }
    
  </div>
</div>
</div>
</div>

    </div>
  )
}

export default History