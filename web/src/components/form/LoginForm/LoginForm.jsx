import React from 'react'
import FormFieldInput from '../../input/FormFieldInput';


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
        <FormFieldInput containerClassName="flex items-center space-x-1 bg-gray-200 rounded-lg p-2" 
                  inputClassName="bg-transparent w-full outline-none" type="text" placeholder="username" 
                  iconClassName="fa fa-user fa-lg" />

      <FormFieldInput containerClassName="my-4 flex items-center space-x-1 bg-gray-200 rounded-lg p-2" 
                  inputClassName="bg-transparent w-full outline-none" type="password" placeholder="password" 
                  iconClassName="fa fa-lock fa-lg" />
  

          <button className="bg-black text-white rounded-lg w-full p-2 mb-4">Login</button>
        </form>
      </div>
    );
}

export default LoginForm;