import React,{ useState , useRef} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheck, FaTimes, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';
import { useCreateBusinessMutation, useGetAllBusinessesQuery } from '../../redux/api/business';


const notifySuccess = () => toast.success("Success!", { icon: <FaCheck /> });
const notifyError = () => toast.error("Error!", { icon: <FaTimes /> });
const notifyWarning = () => toast.warn("Warning!", { icon: <FaExclamationTriangle /> });
const notifyInfo = ()=> toast.info("Info!", { icon: <FaInfoCircle /> });



function App() {
  //const [business, setBusiness] = useState({});
  const inputRef = useRef(null)
  const  [createBusiness, {data} ] = useCreateBusinessMutation()
  const { data : allBusinesses, isError, isLoading, refetch } = useGetAllBusinessesQuery();
  

  const handlecreateBusiness = ()=>{
    const d =  {business_id : inputRef.current.value,
                  detail: {
                    name: "ado",
                    phone: "1234567890",
                    rating : 5
                  },liked : true,visited: false}
                  console.log("data to server ==", JSON.stringify(d))
    createBusiness(d )
    refetch()
    // .then((response)=>{
    //   //const { data} = response.data
    //   alert(JSON.stringify(response))
    //   setBusiness(JSON.stringify(response))
    // })
  
  
  }
  return (
    <>
    <div style={{marginTop:200}}>
      <button onClick={handlecreateBusiness}>create business</button>
      <button onClick={notifySuccess}>Success</button>
      <button onClick={notifyError}>Error</button>
      <button onClick={notifyWarning}>Warning</button>
      <button onClick={notifyInfo}>Info</button>
      <ToastContainer />
      <input 
        ref={inputRef}
        style={{width:300,backgroundColor: "red"}}
      />
    </div>
    <div>
      {JSON.stringify(data)}
      <p>List of all businesses</p>
      {JSON.stringify(allBusinesses)}


    </div>
    </>
  )
}
export default App;