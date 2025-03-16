import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheck, FaTimes, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';


const notifySuccess = () => toast.success("Success!", { icon: <FaCheck /> });
const notifyError = () => toast.error("Error!", { icon: <FaTimes /> });
const notifyWarning = () => toast.warn("Warning!", { icon: <FaExclamationTriangle /> });
const notifyInfo = ()=> toast.info("Info!", { icon: <FaInfoCircle /> });


function App() {
  return (
    <div style={{marginTop:200}}>
      <button onClick={notifySuccess}>Success</button>
      <button onClick={notifyError}>Error</button>
      <button onClick={notifyWarning}>Warning</button>
      <button onClick={notifyInfo}>Info</button>
      <ToastContainer />
    </div>
  );
}
export default App;