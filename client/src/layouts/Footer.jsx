import React from 'react'

const Footer = () => {
  return (
    <>
    {/* <!-- Footer --> */}
      <footer className="  w3-center  w3-light-grey "
       //style={{  position: "relative", height:"10vh"}}
       style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        height: "70px",
        width: "100%",
       }}
       
       
       >
        <i className="fa fa-facebook-official w3-hover-opacity"></i>
        <i className="fa fa-instagram w3-hover-opacity"></i>
        <i className="fa fa-snapchat w3-hover-opacity"></i>
        <i className="fa fa-pinterest-p w3-hover-opacity"></i>
        <i className="fa fa-twitter w3-hover-opacity"></i>
        <i className="fa fa-linkedin w3-hover-opacity"></i>
        <p className="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
      </footer>            
    </>
  )
}

export default Footer