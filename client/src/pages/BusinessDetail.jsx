import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { BiWorld } from "react-icons/bi";
import ReactImageGallery from "react-image-gallery";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useBusinessDetail from "../hooks/useBusinessDetail";
import getRating from "../utils/getRating";
import { getPhotos } from "../utils/getPhotos";
import { getCategories } from "../utils/getCategories";
import InfoButton from "../components/button/InfoButton";
import { BiSolidDirectionRight } from "react-icons/bi";

// import Address from "../components/Address";

const BusinessDetail = () => {
    const location = useLocation();  
  const navigate = useNavigate();  
  const id = location.state.id
  console.log("id''''''''''''''''''''''",id)
  const [data, setData] = useState(null)


  const [ searchBusiness, business, errorMessage] = useBusinessDetail()
  const [postition,setPostition] = useState({lat: 0,lng : 0})



  useEffect(() => {
    searchBusiness(id);
    setData(business)
    


}, [])
console.log("business after useeffect ===========================",JSON.stringify(business, null, 2))
// get photos array from business
const photosList = getPhotos(business.photos)


// const b = {
//   images: photosList,
//   title: business.name,
//   //address : business.location.address1,
//   //city: business.location.city,
//   // state: business.location.state,
//   // zip_code: business.location.zip_code,
//   display_phone : business.display_phone,


//   reviews: business.review_count,
//   availability: true,
//   brand: "apex",
//   category: "Sofa",
//   sku: "BE45VGTRK",
//   price: business.price,
//   description:
//     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem exercitationem voluptate sint eius ea assumenda provident eos repellendus qui neque! Velit ratione illo maiores voluptates commodi eaque illum, laudantium non!",
//   size: ["XS", "S", "M", "L", "XL"],
//   color: ["gray", "violet", "red"],
// };
 


  

  const businessData = {
    images: photosList,
    title: business.name,
    reviews: business.review_count,
    rating : business.rating,
    address : business?.location?.address1,
    city: business?.location?.city,
    state: business?.location?.state,
    zip_code: business?.location?.zip_code,
    display_phone : business.display_phone,
    url:business.url,
    lat: business?.coordinates?.latitude,
    lng: business?.coordinates?.longitude,
    availability: true,
    brand: "apex",
    category:getCategories(business.categories),
    sku: "BE45VGTRK",
    price: business.price,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem exercitationem voluptate sint eius ea assumenda provident eos repellendus qui neque! Velit ratione illo maiores voluptates commodi eaque illum, laudantium non!",
    size: ["XS", "S", "M", "L", "XL"],
    color: ["gray", "violet", "red"],
  };
  const plusMinuceButton =
    "flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500";
  return (
    <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
      {/* image gallery */}
      <div className="container mx-auto px-4">
        <ReactImageGallery
          showBullets={false}
          showFullscreenButton={false}
          showPlayButton={false}
          items={businessData.images}
        />

        {/* /image gallery  */}
      </div>
      {/* description  */}

      <div className="mx-auto px-5 lg:px-5">
        <h2 className="pt-3 text-2xl font-bold lg:pt-0">
          {businessData.title}
        </h2>
        <div className="mt-1">
          <div className="flex items-center">
 
            {
              getRating(businessData.rating)
            }

            <p className="ml-3 text-sm text-gray-400">
              ({businessData.reviews})
            </p>
          </div>
        </div>
        <p className="mt-4 text-4xl font-bold text-violet-900">
          ${businessData.price}{" "}
        </p>

         <p className="pt-5 text-sm leading-5 text-gray-500">
        {businessData.address} 
        <br/>
        {businessData.city}, {businessData.state} {businessData.zip_code}
        <br/>
        {businessData.display_phone}
        </p>



        {/* <p className="mt-5 font-bold">
          Availability:{" "}
          {businessData.availability ? (
            <span className="text-green-600">In Stock </span>
          ) : (
            <span className="text-red-600">Expired</span>
          )}
        </p> */}
 
        <p className="font-bold">
          Brand: <span className="font-normal">{businessData.brand}</span>
        </p>
        <p className="font-bold">
          Cathegory:{" "}
          <span className="font-normal">{businessData.category}</span>
        </p>
        <p className="font-bold">
          SKU: <span className="font-normal">{businessData.sku}</span>
        </p>
  
        <p className="pt-5 text-sm leading-5 text-gray-500">
          {businessData.description}
        </p>
        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Size</p>
          <div className="flex gap-1">
            {businessData.size.map((x, index) => {
              return (
                <div
                  key={index}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                >
                  {x}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Color</p>
          <div className="gap-1">
          <div className="mt-3 flex flex-row items-center gap-6">
   
          <button className="flex h-12 w-1/3 items-center justify-center bg-white-900 text-white duration-100" 
                  style={{color: "blue"}} 
                  onClick={()=>{window.open(businessData.url,"_blank")}} 
                  >
            <BiWorld className="mx-2" />
            Website
          </button>
          <button className="flex h-12 w-1/3 items-center justify-center bg-white-900 text-white duration-100" 
                  style={{color: "blue"}} 
                  onClick={()=>{     console.log("business coordinates", businessData.lat,businessData.lng);
                          navigate("/dashboard/business/mapview", {
                             state:{
                               lat : businessData.lat,
                               lng: businessData.lng
                             }
                           })
                         }}
                  >
            <BiSolidDirectionRight className="mx-2" />
            Directions
          </button>
          

        </div>
            {/* {businessData.color.map((x, index) => {
              return (
                <div
                  key={index}
                  className={`h-8 w-8 cursor-pointer border border-white bg-${x}-600 focus:ring-2 focus:ring-${x}-500 active:ring-2 active:ring-${x}-500`}
                />
              );
            })} */}
          </div>
        </div>
        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Quantity</p>
          <div className="flex">
            <button className={`${plusMinuceButton}`}>−</button>
            <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
              1
            </div>
            <button className={`${plusMinuceButton}`}> +</button>
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
  );
};

export default BusinessDetail

// import React from 'react'
// import {useLocation, useNavigate} from 'react-router-dom';
// import useBusinessDetail from '../hooks/useBusinessDetail';
// import { useEffect,  useState } from 'react';
// import Location from '../components/Location/Location';


// const BusinessDetail = () => {
//   const location = useLocation();  
//   const navigate = useNavigate();  

//   const [ searchBusiness, business, errorMessage] = useBusinessDetail()
//   const [postition,setPostition] = useState({lat: 0,lng : 0})
//   const [data,setData] = useState({})



//       useEffect(() => {
//         searchBusiness(location.state.id)
//         .then((record)=>{

//      setData(record)
//         })

//     }, [])

//     console.log("response after use effect search business ====", business)



//   return (
//     <>
//     data
//     <div>{JSON.stringify(business,null,3)}</div>
//     <button title='VIEW LOCATION ON MAP' 
//      onClick={()=>{     
//       navigate("/dashboard/business/mapview", {
//         state:{
//           lat : business.coordinates.latitude,
//           lng:business.coordinates.longitude
//         }
//       })
//     }}
    
//    style={{backgroundColor:'green', cursor:"pointer"}}>VIEW LOCATION ON MAP</button>

 

//     </>
//   )
// }

// export default BusinessDetail







/**
 * 
 import React, {useState, useEffect} from "react";
import {Platform,View, Text, FlatList , Image,ScrollView,Button} from "react-native"
import {FlatList as ReactFlatList} from "flatlist-react/lib";
import styles from "./WebResultsShowStyles"
import {api_root } from "../../api/yelp"
import Location from "../../components/Location/Location";
import { useNavigation } from "@react-navigation/native";


const WebResultsShowScreen = (props)=>{
    const navigation = useNavigation()
    const [result,setResult] = useState(null);

    const [postition,setPostition] = useState({lat: 0,lng : 0})

    const id = props.route.params.id;

    console.log(id);

    const getResult = async (id) => {
       const response =  await fetch(api_root + `${id}`)
       let data = await response.json();

       setResult(data);
    }

    useEffect(()=> {getResult(id)}, [])
    if(!result){
        return null;
    }
       
    return Platform.OS !== 'web'? 
    <div>
        <h1>this is web in div</h1>
      

    </div> : 
    
    <ScrollView>
        <Text>{result.name}</Text>
        <FlatList
        
        horizontal
        showsHorizontalScrollIndicator={true}
            data={result.photos}
            keyExtractor={(photo) =>{return photo}}
            renderItem={({item})=>{
                return <Image  style={{width:400,height:200}} source={{uri : item}} />
            }}        
        />

        <Location 
            address1={result.location.address1}
            address2={result.location.address2}
            city ={result.location.city}
            state ={result.location.state}
            zip_code ={result.location.zip_code}
        />
        <h5>longitude : {result.coordinates.longitude}</h5>
            <h5>latitude : {result.coordinates.latitude}</h5>
            <h5>display_phone : {result.display_phone}</h5>
            <h5>phone : {result.phone}</h5>
        <Text>PHONE NUMBER</Text>
        <Text>{result.phone}</Text>
            <Button title='VIEW LOCATION ON MAP' onPress={()=>{navigation.navigate('MapView',{
                lat : result.coordinates.latitude,
                lng:result.coordinates.longitude
            })}}/>
        
    </ScrollView>

}


export default WebResultsShowScreen;
 */
















/**
 * 
   function MyComponent() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      async function fetchData() {
        const response = await fetch('your-api-endpoint');
        const result = await response.json();
        setData(result);
      }
      fetchData();
    }, []);

    return (
      
        {data ? (
          // Render your data here
          {data.name}
        ) : (
          
            Loading...
          
        )}
      
    );
  }
 */