import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = (props)  =>{
    const navigate = useNavigate();
    return (
        <div style={{ backgroundColor: 'black', flex: 1 }}>

    <div style={{ flex: 3 }} >

      <p style={  {
    fontSize: 70,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: 'center',
    textShadowColor: 'green',
    textShadowRadius: 20

  }} className="text"> MAN </p>
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
        src={require('../../assets/villainImages/PredatorHome.jpg')} />

    </div>

    <div className="button"style={{ flex: 1.25, alignItems: 'center' }}>
      <div onClick={() => { navigate("login") }}>
        <img src={require('../../assets/icons/start.jpg')}  />
      </div>
    </div>

  </div>
    )
}


export default Home;