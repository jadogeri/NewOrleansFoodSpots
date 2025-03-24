
import {useNavigate } from "react-router-dom";

const InfoButton = ({
    icon,
    path,
    state,
    label
}) => {
    const navigate = useNavigate();
  return (
        <button className="flex h-12 w-1/3 items-center justify-center bg-white-900 text-white duration-100 hover:bg-blue-800" 
                style={{color: "blue"}} 
                onClick={navigate(path, { state : state})}
        >
        {icon}
        {label}
        </button>
  )
}

export default InfoButton