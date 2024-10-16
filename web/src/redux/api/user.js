import { apiSlice } from "./apiSlice";

const headers ={
  'Content-Type': 'application/json',
  "Accept":'application/json',
  "Access-Control-Allow-Origin": "*"       
}
export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getUserData: builder.query({
      query: ( token ) =>{
        token = `"${token}"`
        console.log("token to the get method == ",token)
        console.log("text to flask ==",`/get_user_data?token=${token}`);
        
        return {
        method: "GET",
        url : `/get_user_data?token="${token}"`,
        headers: headers
       // body: {token : token},
      } },providesTags : ['User']
    }),
//      query: (id) => `${MOVIE_URL}/specific-movie/${id}`,

    setUserData: builder.mutation({
        query: ( data  ) => {
         
          console.log("data to the set method == ",data)
          console.log("data to flask ==",JSON.stringify(data));
          
          return {
          url: "/set_user_data",
          method: "POST",
          body: {...data},
        }},
        invalidatesTags:['User']
      }),  
  }),
});

export const {
    useGetUserDataQuery,
    useSetUserDataMutation,

} = userApiSlice;

/**
 *     getSpecificMovie: builder.query({
      query: (id) => `${MOVIE_URL}/specific-movie/${id}`,
    }),

    uploadImage: builder.mutation({
      query: (formData) => ({
        url: `${UPLOAD_URL}`,
        method: "POST",
        body: formData,
      }),
    }),

    getNewMovies: builder.query({
      query: () => `${MOVIE_URL}/new-movies`,
    }),

    getTopMovies: builder.query({
      query: () => `${MOVIE_URL}/top-movies`,
    }),

    getRandomMovies: builder.query({
      query: () => `${MOVIE_URL}/random-movies`,
    }),
  }),
 */