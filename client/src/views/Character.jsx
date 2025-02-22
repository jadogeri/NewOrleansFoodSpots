import React, { useState, useReducer } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { openTab } from "../utils/htmlUtil/openTab";
import { motion } from "framer-motion";

import GuageButton from "../components/GuageButton";
import { jsx } from "react/jsx-runtime";

const INCREMENT = 10
const STATUS_POWER = 'GROWING IN POWER';
const STATUS_ZERO = "ZERO IN POWER"

const reducer = (state,action ) => {

    switch(action.attributeToChange){

        case "special":    
            if(state.totalPoints - action.amount < 0){
                return state
            }else{

                return (state.special + action.amount > 100 ||state.special + action.amount < 0 ) ?
                 state :   {...state,special : state.special + action.amount,totalPoints:state.totalPoints - action.amount}        
            }

        case "health":  
            
            if(state.totalPoints - action.amount < 0){
                return state

            }else{
                return (state.health + action.amount > 100 || state.health + action.amount < 0 ) ?
                    state : {...state,health : state.health + action.amount,totalPoints:state.totalPoints - action.amount}    

            }            

    case "strength":  
    
            if(state.totalPoints - action.amount < 0){

                return state;
            }else{
                return (state.strength + action.amount > 100 ||state.strength + action.amount < 0 )?
                    state : {...state,strength : state.strength + action.amount,totalPoints:state.totalPoints - action.amount}        

            }
        
    default:
        return state

    }

}





const Character = (props)  =>{
  const gameState = JSON.parse(localStorage.getItem("STATE"))
  const [difficulty, setDifficulty] = useState({ value: 0 })
  let gameData = JSON.parse(localStorage.getItem("STATE"))
  let gameString = JSON.stringify(gameData)
  console.log(gameData)
  const [state,dispatch] = useReducer(reducer,{name:"arnold",special:0,strength:0,health:0,
    totalPoints:gameData?.points,MAX:gameData?.points});
    console.log(state);

  const navigate = useNavigate();


  const EASY = 250;
  const MEDIUM = 200;
  const HARD = 150;
  const EXPERT = 100;

  const gameLevel = {
      easy: EASY,
      medium: MEDIUM,
      hard: HARD,
      expert : EXPERT
  }

    return (
      <>
  

  <div className="w3-container w3-center tabcontent " style={{ padding: "128px 16px", backgroundColor: 'black' }} id="character">
    <p style={  {
    fontSize: 70,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: 'center',
    textShadowColor: 'green',
    textShadowRadius: 20

  }} className="text w3-center"> Character </p>
    
 
 
    <div  className="w3-row-padding"
    style={{ marginTop: 64,justifyContent:"space-evenly",backgroundColor:"#00072D",
        justifyContent:"center" ,alignSelf:"center"
     }}>

<GuageButton points={state.health} src={require('../assets/icons/fighterHealth.png')} style={{width:200,height:200}}
      onClick={() => { setDifficulty({ value: gameLevel.easy }) }} className="w3-third  w3-container w3-margin-bottom"
      label="Health" value={state.health} increase={() =>{dispatch({attributeToChange : "health",amount:INCREMENT});}}
      decrease={() =>{dispatch({attributeToChange : "health",amount:-1*INCREMENT});}}/>
<GuageButton points={state.strength} src={require('../assets/icons/strength.jpg')} style={{width:200,height:200}}
      onClick={() => {  setDifficulty({ value: gameLevel.easy }) }} className="w3-third  w3-container w3-margin-bottom"
      label="Strength" value={state.health} increase={() =>{dispatch({attributeToChange : "strength",amount:INCREMENT});}}
      decrease={() =>{dispatch({attributeToChange : "strength",amount:-1*INCREMENT});}}
      />
<GuageButton points={state.special} src={require('../assets/icons/specialAbility.png')} style={{width:200,height:200}}
      onClick={() => {setDifficulty({ value: gameLevel.easy }) }} className="w3-third  w3-container w3-margin-bottom"
      label="Special" value={state.health} increase={() =>{dispatch({attributeToChange : "special",amount:INCREMENT});}}
      decrease={() =>{dispatch({attributeToChange : "special",amount:-1*INCREMENT});}}/>

 


    </div>

<div style={{color:"white"}}>state === {JSON.stringify(state)}</div>

    </div>



  </>
    )
}


export default Character;


