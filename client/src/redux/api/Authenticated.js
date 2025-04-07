import api from "./axiosInstance";

export const Authenticated = async ()=>{

  await api.get("/users/current")
  .then((response)=>{
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxno errors , data============================", JSON.stringify(response))
    return response
  })
  .catch((error)=>{

    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxno errors ,============================", JSON.stringify(error))
    return error

  })


}

