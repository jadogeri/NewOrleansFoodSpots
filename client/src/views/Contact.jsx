import React from 'react'
import ContactForm from '../components/form/ContactForm/ContactForm'

const Contact = () => {
  return (
    <div
    className="w3-container w3-light-grey tabcontent"
    style={{ padding: "128px 16px" }}
    id="contact"
  >
  
    <div style={{ marginTop: 48 }}>
 
      <br />

      <ContactForm/>
    </div>
  </div>
  )
}

export default Contact