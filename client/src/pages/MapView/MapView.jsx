import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Map from '../../components/Map/Map';





import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { BiWorld } from "react-icons/bi";
import { BiSolidDirectionRight } from "react-icons/bi";


const MapView = () => {
  const inputRef = useRef(null);

      const location = useLocation();  
      const navigate = useNavigate();  
      const [address, setAddress] = useState('');
      const [result, setResult] = useState([]);
    
      const [coordinates, setCoordinates] = useState({lat : 29.951065,lon : -90.071533});
    
      useEffect(() => {
        // Accessing the input element when the component mounts
        if (inputRef.current) {
          inputRef.current.focus(); // Focus the input field on initial render
        }
      }, []);
        const updateRoute = (newLat, newLon) => {
          setCoordinates({newLat,newLon});
          //setTo(newTo);
        };

        const handleInputChange = (event) => {
          console.log("handleinput change.......................")
          //setAddress(event.target.value);
        };
      
        const handleSearch = async () => {
          console.log("handle search.......................")

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/search?q=${inputRef.current.value}&format=json`

              // `https://nominatim.openstreetmap.org/search?q=${address}&format=json`
            );
            const data = await response.json();
            if (data.length > 0) {
              setResult(data)
              //alert(JSON.stringify(data))
              setCoordinates({ lat: data[0].lat, lon: data[0].lon });
            } else {
              alert('Address not found');
            }
          } catch (error) {
            console.error('Error fetching data:', error);
            alert('Error fetching data');
          }
        };
      
  return (
    <>
     <section className="flex-grow border-b py-5 pw-5 lg:grid lg:grid-cols-2 lg:py-10">
      <div className="container mx-auto " style={{width:"300%", zIndex:"auto"}} >


{
     <Map //lat={coordinates.lat} lng={coordinates.lon} 
        destination={{lat :location.state.lat, lon :location.state.lng }}
     
     name={"map"}  
     center={[29.998294, -90.1509145]} coordinates={coordinates}
      />
}
     </div>

     <div className="mx-auto px-5 lg:px-5"
     style={{zIndex:400}}>









<div>
      <input
        type="text"
        placeholder="Enter address"
        //value={address}
        ref={inputRef}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>

     
        <div>
          <p>Found : {result.length} results</p>
    
          <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lon}</p>
          {/* <div>{JSON.stringify(result)}</div> */}
        </div>
        {
            result.length===0?
              null:
              result.map((item)=>{

                      return (
                        <div key={item.place_id} 
                        style={{cursor :"pointer", color:"blue"}}
                             onClick={()=>{
                               updateRoute(item.lat,item.lon);
        
                        }}>
                          <p>{JSON.stringify(item.display_name)}</p>
                          <p>{JSON.stringify(item)}</p>


                        </div>
                    );
           

              })

          }
   
    </div>








        <h2 className="pt-3 text-2xl font-bold lg:pt-0">
          {"dummy"}
        </h2>
        <div className="mt-1">
          <div className="flex items-center">
 

            <p className="ml-3 text-sm text-gray-400">
            {"dummy"}

            </p>
          </div>
        </div>
        {/* <p className="mt-4 text-4xl font-bold text-violet-900">
          $          {"dummy"}
          {" "}
        </p> */}

         <p className="pt-5 text-sm leading-5 text-gray-500">
         {"dummy"}

        <br/>
        {"dummy"}
        <br/>
        {"dummy"}
        </p>



   
        <p className="font-bold">
          Brand: <span className="font-normal">          {"dummy"}
          </span>
          {/* <input  value={2}/> */}
        </p>
        <p className="font-bold">
          Cathegory:{" "}
          <span className="font-normal">          {"dummy"}
          </span>
        </p>
        <p className="font-bold">
          SKU: <span className="font-normal">          {"dummy"}
          </span>
        </p>
  
        <p className="pt-5 text-sm leading-5 text-gray-500">
        {"dummy"}
        </p>
        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Size</p>
          <div className="flex gap-1">
          {"dummy"}

          </div>
        </div>
        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Color</p>
          <div className="gap-1">
          <div className="mt-3 flex flex-row items-center gap-6">
   
          <button className="flex h-12 w-1/3 items-center justify-center bg-white-900 text-white duration-100" 
                  style={{color: "blue"}} 
                  >
            <BiWorld className="mx-2" />
            Website
          </button>
          <button className="flex h-12 w-1/3 items-center justify-center bg-white-900 text-white duration-100" 
                  style={{color: "blue"}} 
                  // onClick={()=>{     console.log("business coordinates", businessData.lat,businessData.lng);
                  //         navigate("/dashboard/business/mapview", {
                  //            state:{
                  //              lat : businessData.lat,
                  //              lng: businessData.lng
                  //            }
                  //          })
                  //        }}
                  >
            <BiSolidDirectionRight className="mx-2" />
            Directions
          </button>
          

        </div>
         </div>
        </div>
        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Quantity</p>
          <div className="flex">
            <button className={`${"minus"}`}>−</button>
            <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
              1
            </div>
            <button className={`${"plus"}`}> +</button>
          </div>
        </div>
        <div className="mt-7 flex flex-row items-center gap-6">
          <button className="flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800">
            <BiShoppingBag className="mx-2" />
            Add to cart
          </button>
          <button className="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300">
            <AiOutlineHeart className="mx-2" />
            Wishlist
          </button>
        </div>
      </div>
      </section>
     </>

  )
}

export default MapView



/**
 * 
 [{"place_id":280869355,"licence":"Data © OpenStreetMap 
 contributors, ODbL 1.0. http://osm.org/copyright","osm_type":"way","osm_id":12662338,"
 // lat":"29.999460629869382","lon":"-90.15209137280755",
 // "class":"highway","type":"residential","place_rank":26,
 // "importance":0.05338777676050962,"addresstype":"road",
 // "name":"Metairie Lawn Drive","display_name":"Metairie Lawn Drive, 
 // Metairie, Jefferson Parish, Louisiana, 70002, United States",
 // "boundingbox":["29.9978480","30.0010730","-90.1521530","-90.1520230"]},
 // {"place_id":281913045,"licence":"Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright","osm_type":"way","osm_id":12662336,
 // "lat":"29.985370628368766","lon":"-90.15263164040603","class":"highway",
 // "type":"residential","place_rank":26,"importance":0.05338777676050962,
 // "addresstype":"road","name":"Metairie Lawn Drive","display_name":
 // "Metairie Lawn Drive, Beverly Knoll, Metairie, Jefferson Parish, Louisiana, 70001,
 //  United States","boundingbox":["29.9789500","29.9917969","-90.1528842","-90.
 */