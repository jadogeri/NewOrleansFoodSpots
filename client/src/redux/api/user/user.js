import { apiSlice } from "../apiSlice";
import { setToken } from "../../feature/session/sessionSlice";

const onQueryStartedErrorToast = async (args, { dispatch,queryFulfilled }) => {
    try {
      console.log("]]]]]]]]]]]]]]]]]]]]]]dispatch ==========",JSON.stringify(dispatch, null,4));
  
      console.log(JSON.stringify(queryFulfilled, null,4));
  
      await queryFulfilled;
    } catch (error) {
      // handle error here, dispatch toast message
      console.log("error", error);
      console.log("queryfufilled", queryFulfilled);
  
     console.log(JSON.stringify(error, null,4))
    }
  };
  

let token = ""
const serializedState =  localStorage.getItem(process.env.REACT_APP_REDUX_STATE);

if(serializedState){
  const state = JSON.parse(serializedState)
  token = state.session.token
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
            //headers: headers,
            
        }),
       providesTags: ['User'],

      }),
    profile: builder.query({
        query: () => ({
            url : "/users/profile",
            method : "GET",
            //headers: headers,
          
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
        }),
        onQueryStarted:async (args, { dispatch,queryFulfilled }) => {
            try {
         
              console.log(JSON.stringify(queryFulfilled, null,4));
                        
              let result = await queryFulfilled;

              dispatch(setToken(result.data.accessToken))
            } catch (error) {
              // handle error here, dispatch toast message
              console.log("error", error);
              console.log("queryfufilled", queryFulfilled);
          
             console.log(JSON.stringify(error, null,4))
            }
          },
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
    useCurrentQuery,
    useProfileQuery

} = userApiSlice;
