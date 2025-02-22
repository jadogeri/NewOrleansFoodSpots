import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
 
    forgotPassword: builder.mutation({
        query: ( username ) => ({
            url: "/forgot_password",
            method: "POST",
            body: {username : username},
        })
    }),
    resetPassword: builder.mutation({
        query: ({ username, old_password, new_password}) => ({
            url: "/reset_password",
            method: "POST",
            body: {username : username ,old_password:old_password,new_password:new_password}
      })
  }),
    login: builder.mutation({
        query: ({ username ,password, token}) => ({
            url: "/login",
            method: "POST",
            body: {username : username,password : password, token : token},
        })
    }),
  
    logout: builder.mutation({
        query: ( {username , token }) => ({
            url: "/logout",
            method: "POST",
            body: {username ,token},
        })
    }),  
  }),
});

export const {
  
    useLoginMutation,
    useLogoutMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,  

} = authApiSlice;