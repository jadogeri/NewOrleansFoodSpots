import React from 'react'
import Spacer from "../../components/Spacer"
import {closeNavBar} from "../../utils/htmlUtil/closeNavBar";
import { w3_close } from '../../utils/htmlUtil/w3_close';
import Price from "./Price/Price"
import Input from '../../components/Input';

const SideBarMenu = ({ 
  handlePriceChange,
  handleRatingChange,
handleDeliveryChange,
handlePickupChange,
delivery,
pickup}) => {

  return (
  <nav
  
  
  className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top"
  style={{ zIndex: 3, width: 250,height:"90%",position:"absolute",top:85 }}
  id="mySidebar"
>
  <Spacer paddingTop={80}/>
  <div className="w3-container w3-display-container w3-padding-16">
    <i
      onClick={()=>{w3_close()}}
      className="fa fa-remove w3-hide-large w3-button w3-display-topright"
    />
    <h3 className="w3-wide">
      <b>LOGO</b>
    </h3>
  </div>
  <div
    className="w3-padding-64 w3-large w3-text-grey"
    style={{ fontWeight: "bold" }}
  >
    {/* <Price /> */}
    <>
    <label className='w3-button w3-block w3-white w3-left-align '>
      Price
    </label>
    <label  className="w3-bar-item">
          <input onChange={handlePriceChange} type="radio" value="" name="price" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handlePriceChange}
          value="$"
          title="$"
          name="price"
          type="radio"
          className="w3-bar-item"
        />

        <Input
          handleChange={handlePriceChange}
          value="$$"
          title="$$"
          name="price"
          type="radio"
          className="w3-bar-item"


        />

        <Input
          handleChange={handlePriceChange}
          value="$$$"
          title="$$$"
          name="price"
          type="radio"
          className="w3-bar-item"


        />

        <Input
          handleChange={handlePriceChange}
          value="$$$$"
          title="$$$$"
          name="price"
          type="radio"
          className="w3-bar-item"


        />
        <Input
          handleChange={handlePriceChange}
          value="$$$$$"
          title="$$$$$"
          name="price"
          type="radio"
          className="w3-bar-item"


        />
    </>
    <label  className="w3-bar-item ">
      Rating
    </label>
    <label className="sidebar-label-container">
          <input onChange={handleRatingChange} type="radio" value="" name="rating" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleRatingChange}
          value="1"
          title="⭐"
          name="rating"
          type="radio"
          className="w3-bar-item"


        />

        <Input
          handleChange={handleRatingChange}
          value="2"
          title="⭐⭐"
          name="rating"
          type="radio"
          className="w3-bar-item"


        />

        <Input
          handleChange={handleRatingChange}
          value="3"
          title="⭐⭐⭐"
          name="rating"
          type="radio"
          className="w3-bar-item"


        />

        <Input
          handleChange={handleRatingChange}
          value="4"
          title="⭐⭐⭐⭐"
          name="rating"
          type="radio"
          className="w3-bar-item"


        />
        <Input
          handleChange={handleRatingChange}
          value="5"
          title="⭐⭐⭐⭐⭐"
          name="rating"
          type="radio"
          className="w3-bar-item"


        />
    
    <label  className="w3-bar-item ">
      Transaction
    </label>
    <Input
          handleChange={handleDeliveryChange}
          checked={delivery}
          title="Delivery"
          name="delivery"
          type="checkbox"

        />
    <Input
    handleChange={handlePickupChange}
    checked={pickup}
    title="Pickup"
    name="Pickup"
    type="checkbox"

  />
  <label className="  w3-padding">
    Subscribe
  </label>

  </div>
  <label className="  w3-padding">
    Subscribe
  </label>

  <Spacer paddingBottom={20}/>
</nav>
  )
}

export default SideBarMenu

