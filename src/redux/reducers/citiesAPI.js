import { BASE_URL } from "../../api/url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const citiesAPI = createApi({
  reducerPath: "citiesAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),

  endpoints: (builder) => ({
    getAll: builder.query({
      query: ({ search, checkbox }) =>
        `/api/cities?name=${search}&continent=${checkbox}`,
    }),

    getAllContinent: builder.query({
      query: () => `/api/cities`,
    }),

    newCity: builder.mutation({
      query: (dataCity) => ({
        url: "/api/cities",
        method: "POST",
        body: dataCity,
      }),
    }),

    deleteCity: builder.mutation({
      query: (cityId) => ({
        url: `/api/cities/${cityId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export default citiesAPI;
export const {
  useGetAllQuery,
  useGetAllContinentQuery,
  useNewCityMutation,
  useDeleteCityMutation,
} = citiesAPI;
