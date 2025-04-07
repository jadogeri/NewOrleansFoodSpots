import { apiSlice } from "../apiSlice";
import { setLogoutStatus} from "../../feature/session/sessionSlice"

const testfn = async (args, { dispatch, queryFulfilled, getState,  }) => {
  try {
    console.log("...........................................args .....................................", args)
    console.log("...........................................dispatch .....................................",dispatch)
    console.log("...........................................getState .....................................",getState())



    await queryFulfilled;
    console.log("...........................................dispatch .....................................",dispatch)
    const result = await queryFulfilled;
    console.log("...........................................result .....................................",result)
    if(result){
      return result;
    }

    // Handle successful query
  } catch (error) {
    //  if (error.status === 401) {
      if (error.error.originalStatus === 401) {
        const el = document.getElementById("unauthorized-modal")
        el.style.display = "block"
        console.log('Unauthorized access:', error);

    } else {
      // Handle other errors
      console.error('Query error:', JSON.stringify(error));
      if(error.error.originalStatus ===401){
        dispatch(setLogoutStatus())
        return error
      }

    }
  }
}

export const businessApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
    getAllBusinesses: builder.query({
        query: () => ({
            url : "/businesses",
            method : "GET",
           // headers: headers
        }),
        
       providesTags: ['Business'],
       onQueryStarted: testfn    

      }),
  
    getBusiness: builder.query({
        query: (id) => ({
            url: `/businesses/${id}`,
            method : "GET",
            //headers: headers
        }),
      providesTags: ['Business'],
      //onQueryStarted: Authenticated


    }),
 
    createBusiness: builder.mutation({
        query: ({business_id, detail,liked,visited} ) => ({
            url: "/businesses",
            method: "POST",
            body: {
                business_id :business_id ,
                liked :liked,
                visited,visited,
                detail : detail
            },
            //headers: headers
        }),
     invalidatesTags: ['Business'],

    }),
    deleteBusiness: builder.mutation({
        query: (id) => ({
            url: `/businesses/${id}`,
            method: "DELETE",
            //headers: headers
      }),
    invalidatesTags: ['Business'],

  }),
    deleteAllBusinesses: builder.mutation({
        query: () => ({
            url: `/businesses`,
            method: "DELETE",
           // headers: headers
        }),
    invalidatesTags: ['Business'],

    }),
  
    updateBusiness: builder.mutation({
        query: ( {business_id,liked,visited} ) => ({
            url: "/businesses",
            method: "PUT",
            body: {
              business_id :business_id ,
              liked :liked,
              visited,visited,
          },
          //headers: headers
        }),
      invalidatesTags: ['Business'],

    }),  
  }),
});

export const {
  

    useGetAllBusinessesQuery,
    useGetBusinessQuery,
    useCreateBusinessMutation,
    useDeleteAllBusinessesMutation,
    useDeleteBusinessMutation,
    useUpdateBusinessMutation,
    

} = businessApiSlice;


/**
 * 
 


async (args, { dispatch, queryFulfilled, getState, extra, ... }) => {
  try {
    const result = await queryFulfilled;
    // Handle successful query
  } catch (error) {
     if (error.status === 401) {
      // Handle 401 error - e.g., redirect to login, refresh token
      console.error('Unauthorized access:', error);
      // Optionally dispatch an action or update state
    } else {
      // Handle other errors
      console.error('Query error:', error);
    }
  }
},

 */