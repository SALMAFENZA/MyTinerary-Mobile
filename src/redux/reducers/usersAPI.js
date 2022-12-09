import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "../../api/url";

export const usersAPI = createApi({
  reducerPath: "usersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    userSignUp: builder.mutation({
      query: (user) => ({
        url: "/api/signup",
        method: "POST",
        body: user,
      }),
    }),
    userSignIn: builder.mutation({
      query: (user) => ({
        url: "/api/auth/sign-in", 
        method: "PATCH",
        body: user,
      }),
    }),
    userSignOut: builder.mutation({
      query: ({ user, token }) => ({
        url: "/api/auth/sign-out",
        method: "POST",
        body: user,
        headers: { Authorization: "Bearer " + token },
      }),
    }),
    verifyToken: builder.mutation({
      query: (token) => ({
        url: "/api/token",
        headers: { Authorization: "Bearer " + token },
      }),
    }),
    getUser: builder.query({
      query: (id) => `/api/${id}`,
    }),
  }),
});

export const { 
    useUserSignUpMutation,
    useUserSignInMutation,
    useUserSignOutMutation,
    useVerifyTokenMutation,
    useGetUserQuery
} = usersAPI