import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import ReactImageGallery from "react-image-gallery";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useBusinessDetail from "../hooks/useBusinessDetail";
import getRating from "../utils/getRating";

const BusinessDetail = (props) => {
    const location = useLocation();  
  const navigate = useNavigate();  
  const id = location.state.id

  const [ searchBusiness, business, errorMessage] = useBusinessDetail()
  const [postition,setPostition] = useState({lat: 0,lng : 0})
  const [data,setData] = useState({})



    useEffect(() => {
        console.log("id ================", id)
        searchBusiness(id)
        .then((record)=>{
     setData(record)
        })

    }, [])

    console.log("business after useeffect ===========================",JSON.stringify(business, null, 2))
  const { photos } = business
  console.log(photos)
  const photosList = []
  photos?.forEach((photo)=>{
    photosList.push({
      original : photo,
      thumbnail : photo
    })
  })

  const productDetailItem = {
    images: photosList,
    title: business.name,
    reviews: business.review_count,
    availability: true,
    brand: "apex",
    category: "Sofa",
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
          items={productDetailItem.images}
        />

        {/* /image gallery  */}
      </div>
      {/* description  */}

      <div className="mx-auto px-5 lg:px-5">
        <h2 className="pt-3 text-2xl font-bold lg:pt-0">
          {productDetailItem.title}
        </h2>
        <div className="mt-1">
          <div className="flex items-center">
 
            {
              getRating(business.rating)
            }

            <p className="ml-3 text-sm text-gray-400">
              ({productDetailItem.reviews})
            </p>
          </div>
        </div>
        <p className="mt-4 text-4xl font-bold text-violet-900">
          ${productDetailItem.price}{" "}
        </p>


        <p className="pt-5 text-sm leading-5 text-gray-500">
          {business.location.address1} 
          <br/>
          {business.location.city}, {business.location.state} {business.location.zip_code}
          <br/>
          {business.display_phone}
        </p>


        <p className="mt-5 font-bold">
          Hours of Operation:{" "}
          <p className="pt-1 text-sm leading-5 text-gray-500">
          {/* {business.location.address1}  */}
          <br/>
          {/* {business.location.city}, {business.location.state} {business.location.zip_code} */}
          <br/>
          {/* {business.display_phone} */}
        </p>

        </p>

        {/* <p className="mt-5 font-bold">
          Availability:{" "}
          {productDetailItem.availability ? (
            <span className="text-green-600">In Stock </span>
          ) : (
            <span className="text-red-600">Expired</span>
          )}
        </p> */}
 
        <p className="font-bold">
          Brand: <span className="font-normal">{productDetailItem.brand}</span>
        </p>
        <p className="font-bold">
          Cathegory:{" "}
          <span className="font-normal">{productDetailItem.category}</span>
        </p>
        <p className="font-bold">
          SKU: <span className="font-normal">{productDetailItem.sku}</span>
        </p>
  
        <p className="pt-5 text-sm leading-5 text-gray-500">
          {productDetailItem.description}
        </p>
        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Size</p>
          <div className="flex gap-1">
            {productDetailItem.size.map((x, index) => {
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
          <div className="flex gap-1">
            {productDetailItem.color.map((x, index) => {
              return (
                <div
                  key={index}
                  className={`h-8 w-8 cursor-pointer border border-white bg-${x}-600 focus:ring-2 focus:ring-${x}-500 active:ring-2 active:ring-${x}-500`}
                />
              );
            })}
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