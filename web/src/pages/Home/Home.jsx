import React from "react";
import styles from "./HomeStyles";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => { 
  const navigate = useNavigate();
  return (
    <motion.div 
        initial={{opacity: 1, y: "100%"}} animate={{opacity: 1, y: "50%"}}    transition={{duration: 1, ease: "easeOut"}}
    > 
        <div style={styles.container}>
            
            <div style={styles.header}>
                <img style={styles.logo}
                    animation='bounceIn'  duration={1500} 
                    src={require('../../assets/logo/icon-cream.png') }                
                />
                <h4 style={styles.logo_name}>OPAO CHANGE ORDERS</h4>

            </div>
            <div style={styles.footer}>
                <h4 style={styles.title}>Start Change Orders</h4>
                <h4 style={styles.text}>Start Processing Change Orders with Ease</h4>
                <button style={styles.signIn} onClick={()=> navigate('/login') }>
                <h4 style={styles.textSign}>Get Started</h4>
                    
                </button>
            </div>
        </div>
    </motion.div>
  )
}

export default Home;