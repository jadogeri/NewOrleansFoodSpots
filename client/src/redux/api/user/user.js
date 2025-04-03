import { apiSlice } from "../apiSlice";

let token = ""
const serializedState =  localStorage.getItem(process.env.REACT_APP_AUTH_KEY);
console.log("sereilized ", serializedState)

if(serializedState){
  const state = JSON.parse(serializedState)
  token = state.token
}

console.log("calling api current with user ****************************", token)

const headers ={
    'Content-Type': 'application/json',
    "Accept":'application/json',
    "Access-Control-Allow-Origin": "*"  ,
    "Authorization":`Bearer ${token}`
}


export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    current: builder.query({
        query: () => ({
            url : "/users/current",
            method : "GET",
            headers: headers
        }),
       providesTags: ['User'],

      }),
 
    forgotPassword: builder.mutation({
        query: ({ email} ) => ({
            url: "/users/forgot",
            method: "PUT",
            body: {email : email},
            mode: "cors"
        })
    }),
    resetPassword: builder.mutation({
        query: ({email, new_password, current_password}) => ({
            url: "/users/reset",
            method: "PUT",
            body: {email : email, new_password : new_password, current_password : current_password}
      })
  }),
    login: builder.mutation({
        query: ({ password, email}) => ({
            url: "/users/login",
            method: "POST",
            body: { email : email, password : password},
        })
    }),
    contact : builder.mutation({
        query: ({ email, name, subject , message}) => ({
            url: "/users/contact",
            method: "POST",
            body: { email : email, name: name, subject: subject, message: message},
        })
    }),

    register: builder.mutation({
      query: ({ username ,password, email}) => ({
          url: "/users/register",
          method: "POST",
          body: {username : username, email : email, password : password},
      })
  }),
  
    logout: builder.mutation({
        query: ( token ) => ({
            url: "/users/logout",
            method: "POST",
            body: {token : token},
            headers :{
                'Content-Type': 'application/json',
                "Accept":'application/json',
                "Access-Control-Allow-Origin": "*"  ,
                "Authorization":`Bearer ${token}`
            }
        })
    }),  
    deactivate: builder.mutation({
      query: ( {confirm_delete ,password, email}) => ({
          url: "/users/deactivate",
          method: "DELETE",
          body: {confirm_delete : confirm_delete, email : email, password : password},
      })
  
  })
  }),

})

export const {
  
    useRegisterMutation,
    useDeactivateMutation,
    useLoginMutation,
    useLogoutMutation,
    useContactMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,  
    useCurrentQuery

} = userApiSlice;
