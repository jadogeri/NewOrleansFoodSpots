import React, { useState } from 'react'
import SideBarMenu from './SideBarMenu';
import AppHeader from './AppHeader';
import AppBarMenu from './AppBarMenu';
import Spacer from '../../components/Spacer';
import SearchBar from '../../components/SearchBar/SearchBar';
import useResults from '../../hooks/useResults';


const DashBoard = () => {

     const [searchTerm, setSearchTerm] = useState("");
      const [searchApi, results, errorMessage] = useResults();
  
      const filterResultsByPrice = (price) => {
  
          let myfilteredarray = results.filter((result) => {
              return result.price === price;
          })
  
          return myfilteredarray;
  
      }
  
      console.log(JSON.stringify(results));    
      

  return (
    <>
    
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Montserrat"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n.w3-sidebar a {font-family: "Roboto", sans-serif}\nbody,h1,h2,h3,h4,h5,h6,.w3-wide {font-family: "Montserrat", sans-serif;}\n'
    }}
  />
  {/* Sidebar/menu */}
  <SideBarMenu />
  {/* Top menu on small screens */}
  <AppHeader />

  {/* Overlay effect when opening sidebar on small screens */}
  <AppBarMenu/>


  {/* !PAGE CONTENT! */}
  <div className="w3-main" style={{ marginLeft: 250 }}>
  <Spacer  paddingTop={100}/>

    {/* Push down content on small screens */}
    <div className="w3-hide-large" style={{ marginTop: 83 }} />
    {/* Top header */}
    <header className="w3-container w3-xlarge">
      <p className="w3-left">Jeans</p>
      <div className="w3-right">
        <SearchBar />
        <i className="fa fa-shopping-cart w3-margin-right" />
        <i className="fa fa-search" />
      </div>
    </header>

    <div className="w3-container w3-text-grey" id="jeans">
      <p>8 items</p>
    </div>
    {/* Product grid */}
    <div className="w3-row w3-grayscale">
      <div className="w3-col l3 s6">
        <div className="w3-container">
          <img src="https://www.w3schools.com/w3images/jeans1.jpg" style={{ width: "100%" }} />
          <p>
            Ripped Skinny Jeans
            <br />
            <b>$24.99</b>
          </p>
        </div>
        <div className="w3-container">
          <img src="https://www.w3schools.com/w3images/jeans2.jpg" style={{ width: "100%" }} />
          <p>
            Mega Ripped Jeans
            <br />
            <b>$19.99</b>
          </p>
        </div>
      </div>
      <div className="w3-col l3 s6">
        <div className="w3-container">
          <div className="w3-display-container">
            <img src="https://www.w3schools.com/w3images/jeans2.jpg" style={{ width: "100%" }} />
            <span className="w3-tag w3-display-topleft">New</span>
            <div className="w3-display-middle w3-display-hover">
              <button className="w3-button w3-black">
                Buy now <i className="fa fa-shopping-cart" />
              </button>
            </div>
          </div>
          <p>
            Mega Ripped Jeans
            <br />
            <b>$19.99</b>
          </p>
        </div>
        <div className="w3-container">
          <img src="https://www.w3schools.com/w3images/jeans3.jpg" style={{ width: "100%" }} />
          <p>
            Washed Skinny Jeans
            <br />
            <b>$20.50</b>
          </p>
        </div>
      </div>
      <div className="w3-col l3 s6">
        <div className="w3-container">
          <img src="https://www.w3schools.com/w3images/jeans3.jpg" style={{ width: "100%" }} />
          <p>
            Washed Skinny Jeans
            <br />
            <b>$20.50</b>
          </p>
        </div>
        <div className="w3-container">
          <div className="w3-display-container">
            <img src="https://www.w3schools.com/w3images/jeans4.jpg" style={{ width: "100%" }} />
            <span className="w3-tag w3-display-topleft">Sale</span>
            <div className="w3-display-middle w3-display-hover">
              <button className="w3-button w3-black">
                Buy now <i className="fa fa-shopping-cart" />
              </button>
            </div>
          </div>
          <p>
            Vintage Skinny Jeans
            <br />
            <b className="w3-text-red">$14.99</b>
          </p>
        </div>
      </div>
      <div className="w3-col l3 s6">
        <div className="w3-container">
          <img src="https://www.w3schools.com/w3images/jeans4.jpg" style={{ width: "100%" }} />
          <p>
            Vintage Skinny Jeans
            <br />
            <b>$14.99</b>
          </p>
        </div>
        <div className="w3-container">
          <img src="https://www.w3schools.com/w3images/jeans1.jpg" style={{ width: "100%" }} />
          <p>
            Ripped Skinny Jeans
            <br />
            <b>$24.99</b>
          </p>
        </div>
      </div>
    </div>

    <Spacer  paddingTop={150}/>
  
    {/* End page content */}
  </div>

</>

 
  );
}


export default DashBoard