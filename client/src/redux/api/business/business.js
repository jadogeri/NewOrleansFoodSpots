import { apiSlice } from "../apiSlice";

let token = ""
const serializedState =  localStorage.getItem(process.env.REACT_APP_AUTH_KEY);
console.log("sereilized ", serializedState)

if(serializedState){
  const state = JSON.parse(serializedState)
  token = state.token
}

console.log("v*************************alue of token****************************", token)

const headers ={
    'Content-Type': 'application/json',
    "Accept":'application/json',
    "Access-Control-Allow-Origin": "*"  ,
    "Authorization":`Bearer ${token}`
}

export const businessApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
    getAllBusinesses: builder.query({
        query: () => ({
            url : "/businesses",
            method : "GET",
            headers: headers
        }),
       providesTags: ['Business'],

      }),
  
    getBusiness: builder.query({
        query: (id) => ({
            url: `/businesses/${id}`,
            method : "GET",
            headers: headers
        }),
      providesTags: ['Business'],

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
            headers: headers
        }),
     invalidatesTags: ['Business'],
    }),
    deleteBusiness: builder.mutation({
        query: (id) => ({
            url: `/businesses/${id}`,
            method: "DELETE",
            headers: headers
      }),
    invalidatesTags: ['Business'],
  }),
    deleteAllBusinesses: builder.mutation({
        query: () => ({
            url: `/businesses`,
            method: "DELETE",
            headers: headers
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
          headers: headers
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
