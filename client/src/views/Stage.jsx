import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { openTab } from "../utils/htmlUtil/openTab";
import { motion } from "framer-motion";

const Stage = (props)  =>{
    const navigate = useNavigate();
    return (
        <div style={{ backgroundColor: 'black', flex: 1 }} id="stage"
         className="w3-container tabcontent"
        >

    <div style={{ flex: 3 }} >

      <p style={  {
    fontSize: 70,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: 'center',
    textShadowColor: 'green',
    textShadowRadius: 20

  }} className="text"> STAGE </p>
      <p style={  {
    fontSize: 70,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: 'center',
  

  }}className="text"> Versus
      </p>
      <p style={  {
    fontSize: 70,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: 'center',
    textShadowColor: 'green',
    textShadowRadius: 20

  }}className="text"> The Predator
      </p>
      <img className="icon"
        style={{
          height: 150,
          marginTop: 30,
          alignSelf:"center"
        }}
        src={require('../assets/villainImages/PredatorHome.jpg')} />

    </div>

    <div className="button"style={{ flex: 1.25, alignItems: 'center' }}>
      <div onClick={(event) => {openTab(event, 'game'); //navigate("login")

       }}>
        <img src={require('../assets/icons/playnow.jpg')}  style={{height:100,width:200,alignContent:"center",justifyContent:"center",position:""}}/>
      </div>
    </div>

  </div>
    )
}


export default Stage;

/**
 * 
 * 
 * 
       <a href="#contact" className="w3-bar-item w3-button tablinks" style={{backgroundColor :"green"}}
        onClick={(event)=>{openTab(event, 'contact');}}>
          <i className="fa fa-envelope" style={{backgroundColor :"green"}} /> CONTACT
        </a>
 */