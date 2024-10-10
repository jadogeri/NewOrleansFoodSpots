import React from 'react'


const TestPage = () => {
  return (
    <html
  key="1"
  lang="en"
>
  <head>
    <title>
      W3.CSS Template
    </title>
    <meta charSet="UTF-8" />
    <meta
      content="width=device-width, initial-scale=1"
      name="viewport"
    />
    <link
      href="https://www.w3schools.com/w3css/4/w3.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Lato"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <style
      dangerouslySetInnerHTML={{
        __html: 'body {font-family: "Lato", sans-serif}.mySlides {display: none}'
      }}
     />
  </head>
  <body>
    <div className="w3-top">
      <div className="w3-bar w3-black w3-card">
        <a
          className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
          href="javascript:void(0)"
          onclick="myFunction()"
          title="Toggle Navigation Menu"
        >
          <i className="fa fa-bars" />
        </a>
        <a
          className="w3-bar-item w3-button w3-padding-large"
          href="#"
        >
          HOME
        </a>
        <a
          className="w3-bar-item w3-button w3-padding-large w3-hide-small"
          href="#band"
        >
          BAND
        </a>
        <a
          className="w3-bar-item w3-button w3-padding-large w3-hide-small"
          href="#tour"
        >
          TOUR
        </a>
        <a
          className="w3-bar-item w3-button w3-padding-large w3-hide-small"
          href="#contact"
        >
          CONTACT
        </a>
        <div className="w3-dropdown-hover w3-hide-small">
          <button
            className="w3-padding-large w3-button"
            title="More"
          >
            MORE{' '}
            <i className="fa fa-caret-down" />
          </button>
          <div className="w3-dropdown-content w3-bar-block w3-card-4">
            <a
              className="w3-bar-item w3-button"
              href="#"
            >
              Merchandise
            </a>
            <a
              className="w3-bar-item w3-button"
              href="#"
            >
              Extras
            </a>
            <a
              className="w3-bar-item w3-button"
              href="#"
            >
              Media
            </a>
          </div>
        </div>
        <a
          className="w3-padding-large w3-hover-red w3-hide-small w3-right"
          href="javascript:void(0)"
        >
          <i className="fa fa-search" />
        </a>
      </div>
    </div>
    <div
      className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top"
      id="navDemo"
      style={{
        marginTop: '46px'
      }}
    >
      <a
        className="w3-bar-item w3-button w3-padding-large"
        href="#band"
        onclick="myFunction()"
      >
        BAND
      </a>
      <a
        className="w3-bar-item w3-button w3-padding-large"
        href="#tour"
        onclick="myFunction()"
      >
        TOUR
      </a>
      <a
        className="w3-bar-item w3-button w3-padding-large"
        href="#contact"
        onclick="myFunction()"
      >
        CONTACT
      </a>
      <a
        className="w3-bar-item w3-button w3-padding-large"
        href="#"
        onclick="myFunction()"
      >
        MERCH
      </a>
    </div>
    <div
      className="w3-content"
      style={{
        marginTop: '46px',
        maxWidth: '2000px'
      }}
    >
      <div className=" w3-display-container w3-center">
        <img
          src="../../../assets/logo/logo_color.png"
          style={{
            width: '100%',      
            height:700,
       
  
         
          }}
        />
        <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
          <h3>
            Los Angeles
          </h3>
          <p>
            <b>
              We had the best time playing at Venice Beach!
            </b>
          </p>
        </div>
      </div>
      <div className="mySlides w3-display-container w3-center">
        <img
          src="https://www.w3schools.com/w3images/ny.jpg"
          style={{
            width: '100%'
          }}
        />
        <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
          <h3>
            New York
          </h3>
          <p>
            <b>
              The atmosphere in New York is lorem ipsum.
            </b>
          </p>
        </div>
      </div>
      <div className="mySlides w3-display-container w3-center">
        <img
          src="https://www.w3schools.com/w3images/chicago.jpg"
          style={{
            width: '100%'
          }}
        />
        <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
          <h3>
            Chicago
          </h3>
          <p>
            <b>
              Thank you, Chicago - A night we won't forget.
            </b>
          </p>
        </div>
      </div>
      <div
        className="w3-container w3-content w3-center w3-padding-64"
        id="band"
        style={{
          maxWidth: '800px'
        }}
      >
        <h2 className="w3-wide">
          THE BAND
        </h2>
        <p className="w3-opacity">
          <i>
            We love music
          </i>
        </p>
        <p className="w3-justify">
          We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="w3-row w3-padding-32">
          <div className="w3-third">
            <p>
              Name
            </p>
            <img
              alt="Random Name"
              className="w3-round w3-margin-bottom"
              src="https://www.w3schools.com/w3images/bandmember.jpg"
              style={{
                width: '60%'
              }}
            />
          </div>
          <div className="w3-third">
            <p>
              Name
            </p>
            <img
              alt="Random Name"
              className="w3-round w3-margin-bottom"
              src="https://www.w3schools.com/w3images/bandmember.jpg"
              style={{
                width: '60%'
              }}
            />
          </div>
          <div className="w3-third">
            <p>
              Name
            </p>
            <img
              alt="Random Name"
              className="w3-round"
              src="https://www.w3schools.com/w3images/bandmember.jpg"
              style={{
                width: '60%'
              }}
            />
          </div>
        </div>
      </div>
      <div
        className="w3-black"
        id="tour"
      >
        <div
          className="w3-container w3-content w3-padding-64"
          style={{
            maxWidth: '800px'
          }}
        >
          <h2 className="w3-wide w3-center">
            TOUR DATES
          </h2>
          <p className="w3-opacity w3-center">
            <i>
              Remember to book your tickets!
            </i>
          </p>
          <br />
          <ul className="w3-ul w3-border w3-white w3-text-grey">
            <li className="w3-padding">
              September{' '}
              <span className="w3-tag w3-red w3-margin-left">
                Sold out
              </span>
            </li>
            <li className="w3-padding">
              October{' '}
              <span className="w3-tag w3-red w3-margin-left">
                Sold out
              </span>
            </li>
            <li className="w3-padding">
              November{' '}
              <span className="w3-badge w3-right w3-margin-right">
                3
              </span>
            </li>
          </ul>
          <div
            className="w3-row-padding w3-padding-32"
            style={{
              margin: '0 -16px'
            }}
          >
            <div className="w3-third w3-margin-bottom">
              <img
                alt="New York"
                className="w3-hover-opacity"
                src="https://www.w3schools.com/w3images/newyork.jpg"
                style={{
                  width: '100%'
                }}
              />
              <div className="w3-container w3-white">
                <p>
                  <b>
                    New York
                  </b>
                </p>
                <p className="w3-opacity">
                  Fri 27 Nov 2016
                </p>
                <p>
                  Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                </p>
                <button
                  className="w3-button w3-black w3-margin-bottom"
                  onclick="document.getElementById('ticketModal').style.display='block'"
                >
                  Buy Tickets
                </button>
              </div>
            </div>
            <div className="w3-third w3-margin-bottom">
              <img
                alt="Paris"
                className="w3-hover-opacity"
                src="https://www.w3schools.com/w3images/paris.jpg"
                style={{
                  width: '100%'
                }}
              />
              <div className="w3-container w3-white">
                <p>
                  <b>
                    Paris
                  </b>
                </p>
                <p className="w3-opacity">
                  Sat 28 Nov 2016
                </p>
                <p>
                  Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                </p>
                <button
                  className="w3-button w3-black w3-margin-bottom"
                  onclick="document.getElementById('ticketModal').style.display='block'"
                >
                  Buy Tickets
                </button>
              </div>
            </div>
            <div className="w3-third w3-margin-bottom">
              <img
                alt="San Francisco"
                className="w3-hover-opacity"
                src="https://www.w3schools.com/w3images/sanfran.jpg"
                style={{
                  width: '100%'
                }}
              />
              <div className="w3-container w3-white">
                <p>
                  <b>
                    San Francisco
                  </b>
                </p>
                <p className="w3-opacity">
                  Sun 29 Nov 2016
                </p>
                <p>
                  Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                </p>
                <button
                  className="w3-button w3-black w3-margin-bottom"
                  onclick="document.getElementById('ticketModal').style.display='block'"
                >
                  Buy Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w3-modal"
        id="ticketModal"
      >
        <div className="w3-modal-content w3-animate-top w3-card-4">
          <header className="w3-container w3-teal w3-center w3-padding-32">
            <span
              className="w3-button w3-teal w3-xlarge w3-display-topright"
              onclick="document.getElementById('ticketModal').style.display='none'"
            >
              ×
            </span>
            <h2 className="w3-wide">
              <i className="fa fa-suitcase w3-margin-right" />
              Tickets
            </h2>
          </header>
          <div className="w3-container">
            <p>
              <label>
                <i className="fa fa-shopping-cart" />
                {' '}Tickets, $15 per person
              </label>
            </p>
            <input
              className="w3-input w3-border"
              placeholder="How many?"
              type="text"
            />
            <p>
              <label>
                <i className="fa fa-user" />
                {' '}Send To
              </label>
            </p>
            <input
              className="w3-input w3-border"
              placeholder="Enter email"
              type="text"
            />
            <button className="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right">
              PAY{' '}
              <i className="fa fa-check" />
            </button>
            <button
              className="w3-button w3-red w3-section"
              onclick="document.getElementById('ticketModal').style.display='none'"
            >
              Close{' '}
              <i className="fa fa-remove" />
            </button>
            <p className="w3-right">
              Need{' '}
              <a
                className="w3-text-blue"
                href="#"
              >
                help?
              </a>
            </p>
          </div>
        </div>
      </div>
      <div
        className="w3-container w3-content w3-padding-64"
        id="contact"
        style={{
          maxWidth: '800px'
        }}
      >
        <h2 className="w3-wide w3-center">
          CONTACT
        </h2>
        <p className="w3-opacity w3-center">
          <i>
            Fan? Drop a note!
          </i>
        </p>
        <div className="w3-row w3-padding-32">
          <div className="w3-col m6 w3-large w3-margin-bottom">
            <i
              className="fa fa-map-marker"
              style={{
                width: '30px'
              }}
            />
            {' '}Chicago, US
            <br />
            <i
              className="fa fa-phone"
              style={{
                width: '30px'
              }}
            />
            {' '}Phone: +00 151515
            <br />
            <i
              className="fa fa-envelope"
              style={{
                width: '30px'
              }}
            >
              {' '}
            </i>
            {' '}Email: mail@mail.com
            <br />
          </div>
          <div className="w3-col m6">
            <form
              action="/action_page.php"
              target="_blank"
            >
              <div
                className="w3-row-padding"
                style={{
                  margin: '0 -16px 8px -16px'
                }}
              >
                <div className="w3-half">
                  <input
                    className="w3-input w3-border"
                    name="Name"
                    placeholder="Name"
                    required
                    type="text"
                  />
                </div>
                <div className="w3-half">
                  <input
                    className="w3-input w3-border"
                    name="Email"
                    placeholder="Email"
                    required
                    type="text"
                  />
                </div>
              </div>
              <input
                className="w3-input w3-border"
                name="Message"
                placeholder="Message"
                required
                type="text"
              />
              <button
                className="w3-button w3-black w3-section w3-right"
                type="submit"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <img
      className="w3-image w3-greyscale-min"
      src="/w3images/map.jpg"
      style={{
        width: '100%'
      }}
    />
    <footer className="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
      <i className="fa fa-facebook-official w3-hover-opacity" />
      <i className="fa fa-instagram w3-hover-opacity" />
      <i className="fa fa-snapchat w3-hover-opacity" />
      <i className="fa fa-pinterest-p w3-hover-opacity" />
      <i className="fa fa-twitter w3-hover-opacity" />
      <i className="fa fa-linkedin w3-hover-opacity" />
      <p className="w3-medium">
        Powered by{' '}
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          target="_blank"
        >
          w3.css
        </a>
      </p>
    </footer>
    <script
      dangerouslySetInnerHTML={{
        __html: '// Automatic Slideshow - change image every 4 secondsvar myIndex = 0;carousel();function carousel() {  var i;  var x = document.getElementsByClassName("mySlides");  for (i = 0; i < x.length; i++) {    x[i].style.display = "none";    }  myIndex++;  if (myIndex > x.length) {myIndex = 1}      x[myIndex-1].style.display = "block";    setTimeout(carousel, 4000);    }// Used to toggle the menu on small screens when clicking on the menu buttonfunction myFunction() {  var x = document.getElementById("navDemo");  if (x.className.indexOf("w3-show") == -1) {    x.className += " w3-show";  } else {     x.className = x.className.replace(" w3-show", "");  }}// When the user clicks anywhere outside of the modal, close itvar modal = document.getElementById(\'ticketModal\');window.onclick = function(event) {  if (event.target == modal) {    modal.style.display = "none";  }}'
      }}
     />
  </body>
</html>
  )
}

export default TestPage