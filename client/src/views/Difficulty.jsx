import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { openTab } from "../utils/htmlUtil/openTab";
import { motion } from "framer-motion";
import ImageDetail from "../components/ImageDetail"
import NavButton from "../components/NavButton"

const Difficulty = (props)  =>{
  const [difficulty, setDifficulty] = useState({ value: 0 })
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
    
  <div className="w3-container w3-center tabcontent " style={{ padding: "128px 16px", backgroundColor: 'black' }} id="difficulty">
    <p style={  {
    fontSize: 70,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: 'center',
    textShadowColor: 'green',
    textShadowRadius: 20

  }} className="text w3-center"> GAME DIFFICULTY </p>
    
    <div style={{alignItems:"center",alignContent:"center",justifyItems:"center",display:"flex",justifyContent:"space-between"}}>
    <div className="w3-center" 
    style={{ marginTop: 64,justifyContent:"space-between",backgroundColor:"#00072D",
             
     }}>

     <ImageDetail points={gameLevel.easy} src={require('../assets/icons/easy.png')} onClick={() => { setDifficulty({ value: gameLevel.easy }) }}/>
     <ImageDetail points={gameLevel.medium} src={require('../assets/icons/medium.png')} onClick={() => { setDifficulty({ value: gameLevel.medium }) }}/>
     <ImageDetail points={gameLevel.hard} src={require('../assets/icons/hard.png')} onClick={() => { setDifficulty({ value: gameLevel.hard}) }}/>
     <ImageDetail points={gameLevel.expert} src={require('../assets/icons/expert.png')} onClick={() => { setDifficulty({ value: gameLevel.expert }) }}/>


 
    </div>


    </div>
    {/* <NavButton style={{backgroundColor:"red",width:200,height:50,justifyItems:"center",
      position:"flex",alignItems:"center",alignContent:"center",justifyItems:"center",
      cursor:"pointer"}} title="CHOOSE DIFFICULTY" onClick={()=>{alert("pressed")}}/> */}
    <button style={{backgroundColor:difficulty.value === 0 ?"red":"blue",width:300,height:75,color:"white",
                cursor: difficulty.value === 0 ? "default" : "pointer"
    }} 
        onClick={difficulty.value > 0 ? (event) => {localStorage.setItem("STATE",JSON.stringify({points:difficulty.value}));
          openTab(event,"character"); } : () => { }} >

{difficulty.value === 0 ? "CHOOSE DIFFICULTY" : "ENTER GAME"}
                </button>
  </div>
  </>
    )
}


export default Difficulty;


