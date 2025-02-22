import React, {  useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import FormFieldInput from '../../input/FormFieldInput';
import { useContactMutation } from '../../../redux/api/user'
import { handleNavClickDelay } from "../../../handleNavClickDelay";
import "./styles.css"
import {  useDispatch } from "react-redux";
import { setError } from '../../../redux/feature/session/sessionSlice';
import FormFieldArea from '../../input/FormFieldArea';

const ContactForm = () => {
  const auth = JSON.parse(localStorage.getItem("AUTHKEY"))

  const [ email, setEmail] = useState(auth?auth.email : "");
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const contactForm = useRef(null);
  const [ contact ] = useContactMutation();


  const sendMessage =(e)=>{
    e.preventDefault();
    const email = contactForm.current?.email?.value;
    const name = contactForm.current?.name?.value
    const subject = contactForm.current?.subject?.value
    const message = contactForm.current?.message?.value
    let data ={email, name, subject, message }
    alert(JSON.stringify(data));
    dispatch(setError(""));
    return JSON.stringify(data)
  }

  const onChangeHandler=(e)=>{
    e.preventDefault();
  
    dispatch(setError(""));

  }

  const onChangeEmailHandler=(e)=>{
    e.preventDefault();
  
    setEmail(e.target.value);
    dispatch(setError(""));

  }

   const handleSubmit = (e) => {

    e.preventDefault();  
    const name = contactForm.current?.name?.value
    const subject = contactForm.current?.subject?.value
    const message = contactForm.current?.message?.value

     
contact({ email : email, name: name, subject: subject, message: message})

.then((response)=>{
  if(response.error){

    console.log(response)
    console.log(JSON.stringify(response))
    
  
    console.log(response.error)
    console.log(JSON.stringify(response.error))
    dispatch(setError(response.error.data.message))
  }
  else{

    console.log("logging in ..............")
    console.log(response.data)
  alert(JSON.stringify(response.data))
  // navigate("/dashboard",{ state : response.data})
  }

})
.catch((response)=>{
  console.log(response)
  console.log(JSON.stringify(response))


})


}
    return (
      <div className='container' style={{backgroundColor:"black",justifyContent:"center", margin: "auto",
        width: "50%",alignSelf:"center"}}>
        <div className="text-center py-4">
          <h1 className="text-7xl font-semibold text"
          style={{

            textAlign: 'center',
            textShadowColor: 'green',
            textShadowRadius: 20,
            color:"green"
        
          }}
          
          >Contact</h1>
          <p className="font-light text-lg" style={{fontStyle: "italic",fontWeight: "bold",color:"green" }}>
            Lets get in touch. Send us a message:
          </p>
        </div>
        <form onSubmit={handleSubmit} ref={contactForm}>

        <FormFieldInput containerClassName="flex items-center space-x-1 bg-gray-200 rounded-lg p-2" required={true} name="name"
                  inputClassName="bg-transparent w-full outline-none" type="text" placeholder="Name" onChange={onChangeHandler}
                  iconClassName="fa fa-user fa-md" />

        <FormFieldInput containerClassName="my-4 flex items-center space-x-1 bg-gray-200 rounded-lg p-2" required={true} value={email}
                  inputClassName="bg-transparent w-full outline-none" type="email" placeholder="Email" onChange={onChangeEmailHandler}
                  iconClassName="fa fa-envelope fa-md" />

      <FormFieldInput containerClassName="my-4 flex items-center space-x-1 bg-gray-200 rounded-lg p-2" name="subject"
            inputClassName="bg-transparent w-full outline-none" type="text" placeholder="subject" 
            iconClassName="fa " required={true}  onChange={onChangeHandler} />

      <FormFieldArea containerClassName="my-4 flex items-center space-x-1 bg-gray-200 rounded-lg p-2" name="message"
                  inputClassName="bg-transparent w-full outline-none" type="text" placeholder="Write something ..." 
                   required={true}  onChange={onChangeHandler} style={{height:200}}/>
          <div className="pb-4 text-sm flex items-center justify-between">

 
        </div>

          <button className="bg- text-white rounded-lg w-full p-2 mb-4" style={{backgroundColor:"green"}}>Login</button>
        
        </form>


        
      </div>
    );

  }

export default ContactForm;


