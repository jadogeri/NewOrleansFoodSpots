import React from 'react'
import InputField from '../../input/FormFieldInput';

const RegisterForm = () => {
  return (
    <div>
      <div className="text-center py-4">
        <h1 className="text-7xl font-semibold">Register</h1>
        <p className="font-light text-lg">
          please create account to access our services
        </p>
      </div>
      <form>
        <InputField containerClassName="flex items-center space-x-1 bg-gray-200 rounded-lg p-2" 
                    inputClassName="bg-transparent w-full outline-none" type="text" placeholder="username" 
                    iconClassName="fa fa-user fa-lg" />

        <InputField containerClassName="my-4 flex items-center space-x-1 bg-gray-200 rounded-lg p-2" 
                    inputClassName="bg-transparent w-full outline-none" type="email" placeholder="email" 
                    iconClassName="fa fa-envelope fa-sm" />

        <InputField containerClassName="my-4 flex items-center space-x-1 bg-gray-200 rounded-lg p-2" 
                    inputClassName="bg-transparent w-full outline-none" type="password" placeholder="password" 
                    iconClassName="fa fa-lock fa-lg" />

        <InputField containerClassName="my-4 flex items-center space-x-1 bg-gray-200 rounded-lg p-2" 
                    inputClassName="bg-transparent w-full outline-none" type="password" placeholder="confirm password" 
                    iconClassName="fa fa-lock fa-lg" />


        <button className="bg-black text-white rounded-lg w-full p-2 mb-4">Sign up</button>
      </form>
    </div>
  );
};

export default RegisterForm