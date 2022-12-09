import { BASE_URL } from "../../api/url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const reactionsAPI = createApi({
  reducerPath: "reactionsAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL, 
  }),

  endpoints: (builder) => ({
    addReaction: builder.mutation({
      query: ({id , token }) => ({
        url: `/api/reactions/${id}`,
        method: "PUT",
        headers: {
          Authorization: "Bearer " + `${token}`,
        },
      }),
    }),
    deleteReaction: builder.mutation({
      query: ({id , token }) => ({
        url: `/api/reactions/`,
        method: "DELETE",
        body: id,
        headers: {
          Authorization: "Bearer " + `${token}`, 
        },
      }),
    }),
    getReaction: builder.mutation({
      query: ( itineraryId) => ({
        url: `/api/reactions?itineraryId=${itineraryId}`,
       
      }),
    }),
    getReactionByUser: builder.mutation({
      query: ({  userId , token }) => ({
        url: `/api/reactions?itineraryId=&userId=${userId}`,
        headers: {
          Authorization: "Bearer " + `${token}`, 
        },
      }),
    }),
  }),
});
export default reactionsAPI;
export const {
  useDeleteReactionMutation,
  useAddReactionMutation,
  useGetReactionMutation,
  useGetReactionByUserMutation,
} = reactionsAPI;
