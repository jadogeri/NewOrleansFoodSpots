import React from 'react'


const LoginForm = () => {
    return (
        <div>
          <div className="text-center py-4">
            <h1 className="text-7xl font-semibold">Login</h1>
            <p className="font-light text-lg">
              Please login to access our services
            </p>
          </div>
          <form>
            <div className="flex items-center space-x-1 bg-gray-200 rounded-lg p-2">
              {/* <CiUser className="text-xl" /> */}
            <i className="fa fa-user fa-lg" ></i> 
        <i className="fa fa-key fa-lg"></i>
              
              <input
                className="bg-transparent w-full outline-none"
                type="text"
                placeholder="username"
              />
            </div>
            <div className="my-4 flex items-center space-x-1 bg-gray-200 rounded-lg p-2">
              {/* <RiLockPasswordLine className="text-xl" /> */}

              <input
                className="bg-transparent w-full outline-none"
                type="password"
                placeholder="password"
              />
            </div>
            <button className="bg-black text-white rounded-lg w-full p-2 mb-4">Login</button>
          </form>
        </div>
      );
}
export default LoginForm;